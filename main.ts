import { CharStreams, CommonTokenStream } from "antlr4ts";
import { fusionLexer } from "./generated/fusionLexer";
import {
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
  return (ctx.children || []).map((child) => {
    switch (true) {
      case child instanceof StatContext:
        return walkStat(child);
      default:
        throw `Invalid Node in Prog: ${child.constructor.name}`;
    }
  });
}

function walkStat(ctx: StatContext) {
  return "a";
}

// Sample usage
const program = `
    3 + 5
    7 * (4 - 2)
    x = 10
    x + 20
`;
runCompiler(program);
