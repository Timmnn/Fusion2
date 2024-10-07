import { CharStreams, CommonTokenStream } from "antlr4ts";
import { fusionLexer } from "./generated/fusionLexer";
import {
  AddSubContext,
  ExpressionContext,
  fusionParser,
  IntContext,
  ProgramContext,
  StatementContext,
  FuncCallContext,
  ArgListContext,
  StrLitContext,
  FuncDefContext,
  IfStatementContext,
  NumCompContext,
  FuncDefArgContext,
  FuncDefArgListContext,
  BlockContext,
  ReturnStatementContext,
  IdContext,
  FunctionCallContext,
  VarDeclContext,
  AssignContext,
  WhileLoopContext,
  ImportStatContext,
  NumContext,
} from "./generated/fusionParser";
import * as fs from "fs";
import { execSync } from "child_process";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { debug } from "console";

const global_functions = [] as string[];
const imports = [] as string[];

function parseTreeToJson(tree: ParseTree): any {
  // If the node is a terminal node (leaf), return its text
  if (tree instanceof TerminalNode) {
    return { type: "TerminalNode", value: tree.text };
  }

  // If the node is a non-terminal, create an object with the rule name and children
  const obj: any = {
    type: tree.constructor.name.replace("Context", ""),
    children: [],
  };

  // Recursively process all children and add them to the 'children' array
  for (let i = 0; i < tree.childCount; i++) {
    obj.children.push(parseTreeToJson(tree.getChild(i)));
  }

  return obj;
}

// Function to pretty-print the JSON-like structure
function prettyPrintParseTreeAsJson(tree: ParseTree): string {
  const jsonObject = parseTreeToJson(tree);
  return JSON.stringify(jsonObject, null, 2); // Pretty-print with 2-space indentation
}

function prettyPrintParseTree(tree: ParseTree, indent: number = 0): string {
  const indentSpace = " ".repeat(indent);
  let result = "";

  // If the node is a terminal (leaf), print the text directly
  if (tree instanceof TerminalNode) {
    return indentSpace + tree.text;
  }

  // Start a new line with indentation and opening parenthesis
  result += indentSpace + "(" + tree.constructor.name.replace("Context", "");

  // Iterate over all children of the node
  for (let i = 0; i < tree.childCount; i++) {
    const child = tree.getChild(i);
    result += "\n" + prettyPrintParseTree(child, indent + 2);
  }

  // End with closing parenthesis
  result += "\n" + indentSpace + ")";

  return result;
}

function runCompiler(input_path: string) {
  const input = fs.readFileSync(input_path).toString();
  const inputStream = CharStreams.fromString(input);
  const lexer = new fusionLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new fusionParser(tokenStream);

  const tree = parser.program(); // Start parsing at 'prog' rule

  console.log(prettyPrintParseTreeAsJson(tree));

  console.assert(
    tree instanceof ProgramContext,
    "Top Level Node has to be Prog",
  );

  try {
    const code = walkProgram(tree);
    console.log(
      `
        CODE:
        ----------
        ${code}
        ----------
      `,
      global_functions,
    );

    const c_path = createTempCFile(code);
    const binary_path = `file.bin`;

    execSync(`gcc ${c_path} -o out/${binary_path}`);
    //fs.unlinkSync(c_path);
  } catch (e) {
    console.trace(e);
  }
}

function createTempCFile(code: string) {
  const random_id = Math.random().toString(16).split(".")[1];
  const path = `temp/${random_id}.c`;
  fs.writeFileSync(path, code);
  return path;
}

function walkProgram(ctx: ProgramContext) {
  const main_func = `
  int main() {
    ${(ctx.children || [])
      .map((child) => {
        switch (true) {
          case child instanceof StatementContext:
            return walkStatement(child);
          default:
            throw `Invalid Node in Prog: ${child.constructor.name}`;
        }
      })
      .join("")}
    return 0;
  }`;

  return `
  ${imports}
  ${global_functions.join("\n")}
  ${main_func}
  `;
}

function walkStatement(ctx: StatementContext) {
  return (
    (ctx.children || [])
      .map((child) => {
        console.log("C", child.text);
        switch (true) {
          case child instanceof ExpressionContext:
            return walkExpression(child);
          case child instanceof FuncDefContext:
            return walkFuncDef(child);
          case child instanceof ReturnStatementContext:
            return walkReturnStatement(child);
          case child instanceof VarDeclContext:
            return walkVarDecl(child);
          case child instanceof AssignContext:
            return walkAssign(child);
          case child instanceof IfStatementContext:
            return walkIfStatement(child);
          case child instanceof WhileLoopContext:
            return walkWhileLoop(child);
          case child instanceof ImportStatContext:
            return walkImportStat(child);
          default:
            console.trace("Invalid Statement");
            throw `Invalid Statement: ${child.constructor.name} ${child.text}`;
        }
      })
      .join("") + ";\n"
  );
}

function walkImportStat(ctx: ImportStatContext) {
  if (!ctx.children || ctx.children.length !== 2) {
    throw new InvalidChildCountError({
      expected: 2,
      got: ctx.children?.length,
    });
  }
  const import_target = ctx.children[1].text.replaceAll('"', "");

  if (import_target.startsWith("_C/")) {
    imports.push(`#include <${import_target.replace("_C/", "")}>`);
  }

  return ``;
}

function walkWhileLoop(ctx: WhileLoopContext): string {
  if (!ctx.children || ctx.children.length !== 3) {
    throw new InvalidChildCountError({
      expected: 3,
      got: ctx.children?.length,
    });
  }

  const value = ctx.children[1] as ExpressionContext;
  const block = ctx.children[2] as BlockContext;

  return `
  /*WhileLoop*/
  while(${walkExpression(value)})${walkBlock(block)}
  /*_WhileLoop*/
  `;
}

function walkIfStatement(ctx: IfStatementContext): string {
  if (!ctx.children || ctx.children.length !== 3) {
    throw new InvalidChildCountError({
      expected: 3,
      got: ctx.children?.length,
    });
  }

  const value = ctx.children[1] as ExpressionContext;
  const block = ctx.children[2] as BlockContext;

  return `if(${walkExpression(value)})${walkBlock(block)}`;
}

function walkVarDecl(ctx: VarDeclContext) {
  if (!ctx.children || ctx.children.length !== 4) {
    throw new InvalidChildCountError({
      expected: 4,
      got: ctx.children?.length,
    });
  }

  const type = ctx.children[0] as IdContext;
  const id = ctx.children[1] as IdContext;
  const value = ctx.children[3] as ExpressionContext;

  // Equal to C
  if (["int", "float"].includes(type.text)) {
    return `${walkId(type)} ${walkId(id)} = ${walkExpression(value)}`;
  }

  if (type.text === "bool") {
    return `_Bool ${walkId(id)} = ${walkExpression(value)}`;
  }
}

function walkAssign(ctx: AssignContext) {
  if (!ctx.children || ctx.children.length !== 3) {
    throw new InvalidChildCountError({
      expected: 3,
      got: ctx.children?.length,
    });
  }

  const variable = ctx.children[0] as IdContext;
  const value = ctx.children[2] as ExpressionContext;

  return `${walkId(variable)} = ${walkExpression(value)}`;
}

class InvalidChildCountError extends Error {
  constructor(options: { expected: number; got?: number }) {
    const message = `[AST_ERROR] Invalid Children Count. Expected ${options.expected}, Got ${options.got}`;
    super(message);
  }
}

class NoChildrenError extends Error {
  constructor() {
    const message = `[AST_ERROR] No Children found`;
    super(message);
  }
}
function walkReturnStatement(ctx: ReturnStatementContext) {
  if (!ctx.children || ctx.children.length !== 1) {
    throw new InvalidChildCountError({
      expected: 1,
      got: ctx.children?.length,
    });
  }
  const expr = ctx.children[1] as ExpressionContext;
  return `return ${walkExpression(expr)}`;
}

function walkFuncDef(ctx: FuncDefContext) {
  if (!ctx.children || ctx.children.length !== 6) {
    throw new InvalidChildCountError({
      expected: 6,
      got: ctx.children?.length,
    });
  }
  const func_name = ctx.children[0].text;
  const arg_list = ctx.children[2] as FuncDefArgListContext;
  const return_type = ctx.children[4].text;
  const block = ctx.children[5] as BlockContext;

  console.log(func_name, return_type, block.text);

  global_functions.push(`
    /*FuncDef*/
    ${return_type} ${func_name} ${walkFuncDefArgList(arg_list)} ${walkBlock(block)}
    /*_FuncDef*/
  `);
}

function walkFuncDefArgList(ctx: FuncDefArgListContext) {
  if (!ctx.children) {
    throw new NoChildrenError();
  }
  const args = ctx.children.filter(
    (child) => !(child instanceof TerminalNode),
  ) as FuncDefArgContext[];
  return `(${args.map((arg) => walkFuncDefArg(arg)).join(", ")})`;
}

function walkFuncDefArg(ctx: FuncDefArgContext) {
  if (!ctx.children || ctx.children.length !== 3) {
    throw new InvalidChildCountError({
      expected: 3,
      got: ctx.children?.length,
    });
  }
  const arg_type = ctx.children[2];
  const arg_name = ctx.children[0];

  return `${arg_type} ${arg_name}`;
}

function walkBlock(ctx: BlockContext) {
  if (!ctx.children) {
    throw new NoChildrenError();
  }
  ctx.children?.shift();
  ctx.children?.pop();
  return `{
    ${ctx.children.map((child) => walkStatement(child as StatementContext)).join("\n")}
  }`;
}

function walkExpression(ctx: ExpressionContext): string {
  let code;
  switch (true) {
    case ctx instanceof NumContext:
      code = walkNumber(ctx);
      break;
    case ctx.children?.at(0) instanceof ExpressionContext &&
      ctx.children?.at(1)?.text === "+" &&
      ctx.children?.at(2) instanceof ExpressionContext:
      code = walkAddSub(ctx as AddSubContext);
      break;
    case ctx instanceof StrLitContext:
      code = walkStrLit(ctx);
      break;
    case ctx instanceof FuncCallContext:
      code = walkFuncCall(ctx);
      break;
    case ctx instanceof IdContext:
      code = walkId(ctx);
      break;
    case ctx instanceof NumCompContext:
      code = walkNumComp(ctx);
      break;
    default:
      throw "Invalid Expression: " + ctx.constructor.name;
  }

  return code;
}

function walkNumComp(ctx: NumCompContext) {
  if (!ctx.children || ctx.children.length !== 3) {
    throw new InvalidChildCountError({
      expected: 3,
      got: ctx.children?.length,
    });
  }

  const first = ctx.children[0] as ExpressionContext;
  const operator = ctx.children[1].text;
  const second = ctx.children[2] as ExpressionContext;

  return `${walkExpression(first)} ${operator} ${walkExpression(second)}`;
}

function walkId(ctx: IdContext) {
  return ctx.text;
}

function walkStrLit(ctx: StrLitContext) {
  return ctx.text;
}

function debugChilds(ctx: any) {
  console.trace({
    text: ctx.text,
    children: ctx.children.map((child: any) => [
      child.constructor.name,
      child.text,
    ]),
  });
}

function walkFuncCall(ctx: FuncCallContext) {
  if (!ctx.children) {
    throw new NoChildrenError();
  }
  //@ts-ignore
  ctx = ctx.children[0] as FunctionCallContext;
  if (!ctx.children || ctx.children.length !== 4) {
    throw (
      "FuncCall has to have exactly 4 childs. Found: " + ctx.children?.length
    );
  }
  if (!(ctx instanceof FunctionCallContext)) {
    throw "FuncCall has to have a Func Call as Child (because of the label in the grammar)";
  }
  const func_name = ctx.children?.[0];
  const args_list = ctx.children?.[2] as ArgListContext;

  if (!(func_name instanceof TerminalNode)) {
    throw "Funcname has to be a text";
  }

  return `
  /*FuncCall*/
  ${func_name}(${walkArgList(args_list)})
  /*_FuncCall*/
  `;
}

function walkArgList(ctx: ArgListContext): string {
  return ctx.text;
}

function walkAddSub(ctx: AddSubContext) {
  const first_expr = ctx.expression(0);
  const second_expr = ctx.expression(1);

  return `${walkExpression(first_expr)} + ${walkExpression(second_expr)}`;
}

function walkNumber(ctx: NumContext) {
  return ctx.text;
}

// Sample usage
const path = "./example.fus";
runCompiler(path);
