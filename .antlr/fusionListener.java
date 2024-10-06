// Generated from /Users/timmn/Dev/Fusion/fusion.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link fusionParser}.
 */
public interface fusionListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link fusionParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(fusionParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link fusionParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(fusionParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link fusionParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(fusionParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link fusionParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(fusionParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code FuncCall}
	 * labeled alternative in {@link fusionParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterFuncCall(fusionParser.FuncCallContext ctx);
	/**
	 * Exit a parse tree produced by the {@code FuncCall}
	 * labeled alternative in {@link fusionParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitFuncCall(fusionParser.FuncCallContext ctx);
	/**
	 * Enter a parse tree produced by the {@code AddSub}
	 * labeled alternative in {@link fusionParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterAddSub(fusionParser.AddSubContext ctx);
	/**
	 * Exit a parse tree produced by the {@code AddSub}
	 * labeled alternative in {@link fusionParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitAddSub(fusionParser.AddSubContext ctx);
	/**
	 * Enter a parse tree produced by the {@code NumComp}
	 * labeled alternative in {@link fusionParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterNumComp(fusionParser.NumCompContext ctx);
	/**
	 * Exit a parse tree produced by the {@code NumComp}
	 * labeled alternative in {@link fusionParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitNumComp(fusionParser.NumCompContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Id}
	 * labeled alternative in {@link fusionParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterId(fusionParser.IdContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Id}
	 * labeled alternative in {@link fusionParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitId(fusionParser.IdContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Int}
	 * labeled alternative in {@link fusionParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterInt(fusionParser.IntContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Int}
	 * labeled alternative in {@link fusionParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitInt(fusionParser.IntContext ctx);
	/**
	 * Enter a parse tree produced by the {@code StrLit}
	 * labeled alternative in {@link fusionParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterStrLit(fusionParser.StrLitContext ctx);
	/**
	 * Exit a parse tree produced by the {@code StrLit}
	 * labeled alternative in {@link fusionParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitStrLit(fusionParser.StrLitContext ctx);
	/**
	 * Enter a parse tree produced by {@link fusionParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCall(fusionParser.FunctionCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link fusionParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCall(fusionParser.FunctionCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link fusionParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(fusionParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link fusionParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(fusionParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link fusionParser#importStat}.
	 * @param ctx the parse tree
	 */
	void enterImportStat(fusionParser.ImportStatContext ctx);
	/**
	 * Exit a parse tree produced by {@link fusionParser#importStat}.
	 * @param ctx the parse tree
	 */
	void exitImportStat(fusionParser.ImportStatContext ctx);
	/**
	 * Enter a parse tree produced by {@link fusionParser#funcDef}.
	 * @param ctx the parse tree
	 */
	void enterFuncDef(fusionParser.FuncDefContext ctx);
	/**
	 * Exit a parse tree produced by {@link fusionParser#funcDef}.
	 * @param ctx the parse tree
	 */
	void exitFuncDef(fusionParser.FuncDefContext ctx);
	/**
	 * Enter a parse tree produced by {@link fusionParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void enterIfStatement(fusionParser.IfStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link fusionParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void exitIfStatement(fusionParser.IfStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link fusionParser#whileLoop}.
	 * @param ctx the parse tree
	 */
	void enterWhileLoop(fusionParser.WhileLoopContext ctx);
	/**
	 * Exit a parse tree produced by {@link fusionParser#whileLoop}.
	 * @param ctx the parse tree
	 */
	void exitWhileLoop(fusionParser.WhileLoopContext ctx);
	/**
	 * Enter a parse tree produced by {@link fusionParser#funcDefArgList}.
	 * @param ctx the parse tree
	 */
	void enterFuncDefArgList(fusionParser.FuncDefArgListContext ctx);
	/**
	 * Exit a parse tree produced by {@link fusionParser#funcDefArgList}.
	 * @param ctx the parse tree
	 */
	void exitFuncDefArgList(fusionParser.FuncDefArgListContext ctx);
	/**
	 * Enter a parse tree produced by {@link fusionParser#funcDefArg}.
	 * @param ctx the parse tree
	 */
	void enterFuncDefArg(fusionParser.FuncDefArgContext ctx);
	/**
	 * Exit a parse tree produced by {@link fusionParser#funcDefArg}.
	 * @param ctx the parse tree
	 */
	void exitFuncDefArg(fusionParser.FuncDefArgContext ctx);
	/**
	 * Enter a parse tree produced by {@link fusionParser#varDecl}.
	 * @param ctx the parse tree
	 */
	void enterVarDecl(fusionParser.VarDeclContext ctx);
	/**
	 * Exit a parse tree produced by {@link fusionParser#varDecl}.
	 * @param ctx the parse tree
	 */
	void exitVarDecl(fusionParser.VarDeclContext ctx);
	/**
	 * Enter a parse tree produced by {@link fusionParser#assign}.
	 * @param ctx the parse tree
	 */
	void enterAssign(fusionParser.AssignContext ctx);
	/**
	 * Exit a parse tree produced by {@link fusionParser#assign}.
	 * @param ctx the parse tree
	 */
	void exitAssign(fusionParser.AssignContext ctx);
	/**
	 * Enter a parse tree produced by {@link fusionParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void enterReturnStatement(fusionParser.ReturnStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link fusionParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void exitReturnStatement(fusionParser.ReturnStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link fusionParser#argList}.
	 * @param ctx the parse tree
	 */
	void enterArgList(fusionParser.ArgListContext ctx);
	/**
	 * Exit a parse tree produced by {@link fusionParser#argList}.
	 * @param ctx the parse tree
	 */
	void exitArgList(fusionParser.ArgListContext ctx);
	/**
	 * Enter a parse tree produced by {@link fusionParser#arg}.
	 * @param ctx the parse tree
	 */
	void enterArg(fusionParser.ArgContext ctx);
	/**
	 * Exit a parse tree produced by {@link fusionParser#arg}.
	 * @param ctx the parse tree
	 */
	void exitArg(fusionParser.ArgContext ctx);
}