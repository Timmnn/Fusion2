// Generated from fusion.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { MultDivContext } from "./fusionParser";
import { AddSubContext } from "./fusionParser";
import { IntContext } from "./fusionParser";
import { ProgramContext } from "./fusionParser";
import { StatementContext } from "./fusionParser";
import { ExpressionContext } from "./fusionParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `fusionParser`.
 */
export interface fusionListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `MultDiv`
	 * labeled alternative in `fusionParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultDiv?: (ctx: MultDivContext) => void;
	/**
	 * Exit a parse tree produced by the `MultDiv`
	 * labeled alternative in `fusionParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultDiv?: (ctx: MultDivContext) => void;

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
}

