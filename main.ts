import { CharStreams, CommonTokenStream } from "antlr4ts";
import { fusionLexer } from "./generated/fusionLexer";
import {
  AddSubContext,
  ExpressionContext,
  fusionParser,
  ProgramContext,
  StatementContext,
} from "./generated/fusionParser";
import { assert } from "console";
import { deflate } from "zlib";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

// Main function to run the compiler
function runCompiler(input: string) {
  const inputStream = CharStreams.fromString(input);
  const lexer = new fusionLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new fusionParser(tokenStream);

  const tree = parser.program(); // Start parsing at 'prog' rule

  console.log(tree.toStringTree());

  console.assert(
    tree instanceof ProgramContext,
    "Top Level Node has to be Prog",
  );

  const code = walkProgram(tree);
  console.log(code);
}

function walkProgram(ctx: ProgramContext) {
  return `int main() {
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
}

function walkStatement(ctx: StatementContext) {
  return (ctx.children || [])
    .map((child) => {
      switch (true) {
        case child instanceof ExpressionContext:
          return walkExpression(child);
      }
    })
    .join("");
}

function walkExpression(ctx: ExpressionContext) {
  switch (true) {
    case ctx.children?.at(0) instanceof ExpressionContext &&
      ctx.children?.at(1)?.text === "+" &&
      ctx.children?.at(2) instanceof ExpressionContext:
      return walkAddSub(ctx as AddSubContext);
    default:
      "Invalid Expression";
  }
}

function walkAddSub(ctx: AddSubContext) {
  const [first_expr, operator, second_exrp]: [
    ExpressionContext,
    TerminalNode,
    ExpressionContext,
  ] = ctx.children || [];

  console.log(ctx.children.map((child) => child.constructor.name));

  if (!!first_expr && !!operator && !!second_exrp) {
    throw "ERROR";
  }

  return `${walkExpression(first_expr)} ${operator.text} ${walkExpression(second_exrp)}`;
}

// Sample usage
const program = `3 + 5 + 5`;
runCompiler(program);
