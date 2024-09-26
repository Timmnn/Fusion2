import { CharStreams, CommonTokenStream } from "antlr4ts";
import { fusionLexer } from "./generated/fusionLexer";
import {
  AddSubContext,
  ExprContext,
  fusionParser,
  ProgContext,
  StatContext,
} from "./generated/fusionParser";
import { assert } from "console";

// Main function to run the compiler
function runCompiler(input: string) {
  const inputStream = CharStreams.fromString(input);
  const lexer = new fusionLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new fusionParser(tokenStream);

  const tree = parser.prog(); // Start parsing at 'prog' rule

  console.assert(tree instanceof ProgContext, "Top Level Node has to be Prog");

  const code = walkProg(tree);
  console.log(code);
}

function walkProg(ctx: ProgContext) {
  return `int main() {
    ${(ctx.children || [])
      .map((child) => {
        switch (true) {
          case child instanceof StatContext:
            return walkStat(child);
          default:
            throw `Invalid Node in Prog: ${child.constructor.name}`;
        }
      })
      .join("")}
    return 0;
  }`;
}

function walkStat(ctx: StatContext) {
  return (ctx.children || [])
    .map((child) => {
      switch (true) {
        case child instanceof ExprContext:
          return walkExpr(child);
      }
    })
    .join("");
}

function walkExpr(ctx: ExprContext) {
  console.log(ctx.children?.map((child) => child.text));

  console.assert(
    ctx.children?.length === 1,
    "Expr has to have exactly 1 child. Found " + ctx.children?.length,
  );
  const child = ctx.children![0];

  switch (true) {
    case child instanceof AddSubContext:
      return walkAddSub(child);
  }
}

function walkAddSub(ctx: AddSubContext) {
  console.log(ctx.text);
  return "addsub";
}

// Sample usage
const program = `
    3 + 5
    7 * (4 - 2)
    x = 10
    x + 20
`;
runCompiler(program);
