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
  FuncDefArgContext,
  FuncDefArgListContext,
  BlockContext,
  ReturnStatementContext,
  IdContext,
  FunctionCallContext,
} from "./generated/fusionParser";
import fs from "fs";
import { execSync } from "child_process";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";

const global_functions = [] as string[];

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

  console.log(prettyPrintParseTree(tree));

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
  const includes = "#include <stdio.h>";
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
  ${includes}
  ${global_functions.join("\n")}
  ${main_func}
  `;
}

function walkStatement(ctx: StatementContext) {
  return (
    (ctx.children || [])
      .map((child) => {
        switch (true) {
          case child instanceof ExpressionContext:
            return walkExpression(child);
          case child instanceof FuncDefContext:
            return walkFuncDef(child);
          case child instanceof ReturnStatementContext:
            return walkReturnStatement(child);
          default:
            throw `Invalid Statement: ${child.constructor.name}`;
        }
      })
      .join("") + ";"
  );
}

function walkReturnStatement(ctx: ReturnStatementContext) {
  const expr = ctx.children[1];
  return `return ${walkExpression(expr)}`;
}

function walkFuncDef(ctx: FuncDefContext) {
  const func_name = ctx.children[0].text;
  const arg_list = ctx.children[2] as FuncDefArgListContext;
  const return_type = ctx.children[4].text;
  const block = ctx.children[5];

  console.log(func_name, return_type, block.text);

  global_functions.push(`
    ${return_type} ${func_name} ${walkFuncDefArgList(arg_list)} ${walkBlock(block)}
  `);
}

function walkFuncDefArgList(ctx: FuncDefArgListContext) {
  const args = ctx.children.filter(
    (child) => !(child instanceof TerminalNode),
  ) as FuncDefArgContext[];
  return `(${args.map((arg) => walkFuncDefArg(arg)).join(", ")})`;
}

function walkFuncDefArg(ctx: FuncDefArgContext) {
  const arg_type = ctx.children[2];
  const arg_name = ctx.children[0];

  return `${arg_type} ${arg_name}`;
}

function walkBlock(ctx: BlockContext) {
  ctx.children?.shift();
  ctx.children?.pop();
  console.log(
    ctx.children.map((child) => [child.constructor.name, child.text]),
  );
  return `{
    ${ctx.children.map((child) => walkStatement(child))}
  }`;
}

function walkExpression(ctx: ExpressionContext) {
  switch (true) {
    case ctx instanceof IntContext:
      return walkInt(ctx);
    case ctx.children?.at(0) instanceof ExpressionContext &&
      ctx.children?.at(1)?.text === "+" &&
      ctx.children?.at(2) instanceof ExpressionContext:
      return walkAddSub(ctx as AddSubContext);
    case ctx instanceof StrLitContext:
      return walkStrLit(ctx);
    case ctx instanceof FuncCallContext:
      return walkFuncCall(ctx);
    case ctx instanceof IdContext:
      return walkId(ctx);
    default:
      throw "Invalid Expression: " + ctx.constructor.name;
  }
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
    children: ctx.children.map((child) => [child.constructor.name, child.text]),
  });
}

function walkFuncCall(ctx: FuncCallContext) {
  ctx = ctx.children[0] as FunctionCallContext;
  debugChilds(ctx);
  if (!ctx.children || ctx.children.length !== 4) {
    throw (
      "FuncCall has to have exactly 4 childs. Found: " + ctx.children?.length
    );
  }
  if (!(ctx instanceof FunctionCallContext)) {
    throw "FuncCall has to have a Func Call as Child (because of the label in the grammar)";
  }
  const func_name = ctx.children?.[0];
  const args_list = ctx.children?.[2];

  if (!(func_name instanceof TerminalNode)) {
    throw "Funcname has to be a text";
  }

  return `${func_name}(${walkArgList(args_list)})`;
}

function walkArgList(ctx: ArgListContext) {
  return ctx.text;
}

function walkAddSub(ctx: AddSubContext) {
  const first_expr = ctx.expression(0);
  const second_expr = ctx.expression(1);

  return `${walkExpression(first_expr)} + ${walkExpression(second_expr)}`;
}

function walkInt(ctx: IntContext) {
  return ctx.text;
}

// Sample usage
const path = "./example.fus";
runCompiler(path);
