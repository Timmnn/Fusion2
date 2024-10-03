// Generated from fusion.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { IntContext } from "./fusionParser";
import { AddSubContext } from "./fusionParser";
import { FuncCallContext } from "./fusionParser";
import { IdContext } from "./fusionParser";
import { StrLitContext } from "./fusionParser";
import { NumCompContext } from "./fusionParser";
import { ProgramContext } from "./fusionParser";
import { StatementContext } from "./fusionParser";
import { ExpressionContext } from "./fusionParser";
import { FunctionCallContext } from "./fusionParser";
import { BlockContext } from "./fusionParser";
import { FuncDefContext } from "./fusionParser";
import { IfStatementContext } from "./fusionParser";
import { WhileLoopContext } from "./fusionParser";
import { ForLoopContext } from "./fusionParser";
import { FuncDefArgListContext } from "./fusionParser";
import { FuncDefArgContext } from "./fusionParser";
import { VarDeclContext } from "./fusionParser";
import { AssignContext } from "./fusionParser";
import { ReturnStatementContext } from "./fusionParser";
import { ArgListContext } from "./fusionParser";
import { ArgContext } from "./fusionParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `fusionParser`.
 */
export interface fusionListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `Int`
	 * labeled alternative in `fusionParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInt?: (ctx: IntContext) => void;
	/**
	 * Exit a parse tree produced by the `Int`
	 * labeled alternative in `fusionParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInt?: (ctx: IntContext) => void;

	/**
	 * Enter a parse tree produced by the `AddSub`
	 * labeled alternative in `fusionParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddSub?: (ctx: AddSubContext) => void;
	/**
	 * Exit a parse tree produced by the `AddSub`
	 * labeled alternative in `fusionParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddSub?: (ctx: AddSubContext) => void;

	/**
	 * Enter a parse tree produced by the `FuncCall`
	 * labeled alternative in `fusionParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFuncCall?: (ctx: FuncCallContext) => void;
	/**
	 * Exit a parse tree produced by the `FuncCall`
	 * labeled alternative in `fusionParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFuncCall?: (ctx: FuncCallContext) => void;

	/**
	 * Enter a parse tree produced by the `Id`
	 * labeled alternative in `fusionParser.expression`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by the `Id`
	 * labeled alternative in `fusionParser.expression`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by the `StrLit`
	 * labeled alternative in `fusionParser.expression`.
	 * @param ctx the parse tree
	 */
	enterStrLit?: (ctx: StrLitContext) => void;
	/**
	 * Exit a parse tree produced by the `StrLit`
	 * labeled alternative in `fusionParser.expression`.
	 * @param ctx the parse tree
	 */
	exitStrLit?: (ctx: StrLitContext) => void;

	/**
	 * Enter a parse tree produced by the `NumComp`
	 * labeled alternative in `fusionParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNumComp?: (ctx: NumCompContext) => void;
	/**
	 * Exit a parse tree produced by the `NumComp`
	 * labeled alternative in `fusionParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNumComp?: (ctx: NumCompContext) => void;

	/**
	 * Enter a parse tree produced by `fusionParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `fusionParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `fusionParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `fusionParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `fusionParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `fusionParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `fusionParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `fusionParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `fusionParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `fusionParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `fusionParser.funcDef`.
	 * @param ctx the parse tree
	 */
	enterFuncDef?: (ctx: FuncDefContext) => void;
	/**
	 * Exit a parse tree produced by `fusionParser.funcDef`.
	 * @param ctx the parse tree
	 */
	exitFuncDef?: (ctx: FuncDefContext) => void;

	/**
	 * Enter a parse tree produced by `fusionParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `fusionParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `fusionParser.whileLoop`.
	 * @param ctx the parse tree
	 */
	enterWhileLoop?: (ctx: WhileLoopContext) => void;
	/**
	 * Exit a parse tree produced by `fusionParser.whileLoop`.
	 * @param ctx the parse tree
	 */
	exitWhileLoop?: (ctx: WhileLoopContext) => void;

	/**
	 * Enter a parse tree produced by `fusionParser.forLoop`.
	 * @param ctx the parse tree
	 */
	enterForLoop?: (ctx: ForLoopContext) => void;
	/**
	 * Exit a parse tree produced by `fusionParser.forLoop`.
	 * @param ctx the parse tree
	 */
	exitForLoop?: (ctx: ForLoopContext) => void;

	/**
	 * Enter a parse tree produced by `fusionParser.funcDefArgList`.
	 * @param ctx the parse tree
	 */
	enterFuncDefArgList?: (ctx: FuncDefArgListContext) => void;
	/**
	 * Exit a parse tree produced by `fusionParser.funcDefArgList`.
	 * @param ctx the parse tree
	 */
	exitFuncDefArgList?: (ctx: FuncDefArgListContext) => void;

	/**
	 * Enter a parse tree produced by `fusionParser.funcDefArg`.
	 * @param ctx the parse tree
	 */
	enterFuncDefArg?: (ctx: FuncDefArgContext) => void;
	/**
	 * Exit a parse tree produced by `fusionParser.funcDefArg`.
	 * @param ctx the parse tree
	 */
	exitFuncDefArg?: (ctx: FuncDefArgContext) => void;

	/**
	 * Enter a parse tree produced by `fusionParser.varDecl`.
	 * @param ctx the parse tree
	 */
	enterVarDecl?: (ctx: VarDeclContext) => void;
	/**
	 * Exit a parse tree produced by `fusionParser.varDecl`.
	 * @param ctx the parse tree
	 */
	exitVarDecl?: (ctx: VarDeclContext) => void;

	/**
	 * Enter a parse tree produced by `fusionParser.assign`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by `fusionParser.assign`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;

	/**
	 * Enter a parse tree produced by `fusionParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `fusionParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `fusionParser.argList`.
	 * @param ctx the parse tree
	 */
	enterArgList?: (ctx: ArgListContext) => void;
	/**
	 * Exit a parse tree produced by `fusionParser.argList`.
	 * @param ctx the parse tree
	 */
	exitArgList?: (ctx: ArgListContext) => void;

	/**
	 * Enter a parse tree produced by `fusionParser.arg`.
	 * @param ctx the parse tree
	 */
	enterArg?: (ctx: ArgContext) => void;
	/**
	 * Exit a parse tree produced by `fusionParser.arg`.
	 * @param ctx the parse tree
	 */
	exitArg?: (ctx: ArgContext) => void;
}

