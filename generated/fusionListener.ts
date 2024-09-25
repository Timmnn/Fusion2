// Generated from fusion.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PrintExprContext } from "./fusionParser";
import { AssignContext } from "./fusionParser";
import { BlankContext } from "./fusionParser";
import { MulDivContext } from "./fusionParser";
import { AddSubContext } from "./fusionParser";
import { IntContext } from "./fusionParser";
import { IdContext } from "./fusionParser";
import { ParensContext } from "./fusionParser";
import { ProgContext } from "./fusionParser";
import { StatContext } from "./fusionParser";
import { ExprContext } from "./fusionParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `fusionParser`.
 */
export interface fusionListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `printExpr`
	 * labeled alternative in `fusionParser.stat`.
	 * @param ctx the parse tree
	 */
	enterPrintExpr?: (ctx: PrintExprContext) => void;
	/**
	 * Exit a parse tree produced by the `printExpr`
	 * labeled alternative in `fusionParser.stat`.
	 * @param ctx the parse tree
	 */
	exitPrintExpr?: (ctx: PrintExprContext) => void;

	/**
	 * Enter a parse tree produced by the `assign`
	 * labeled alternative in `fusionParser.stat`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by the `assign`
	 * labeled alternative in `fusionParser.stat`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;

	/**
	 * Enter a parse tree produced by the `blank`
	 * labeled alternative in `fusionParser.stat`.
	 * @param ctx the parse tree
	 */
	enterBlank?: (ctx: BlankContext) => void;
	/**
	 * Exit a parse tree produced by the `blank`
	 * labeled alternative in `fusionParser.stat`.
	 * @param ctx the parse tree
	 */
	exitBlank?: (ctx: BlankContext) => void;

	/**
	 * Enter a parse tree produced by the `MulDiv`
	 * labeled alternative in `fusionParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMulDiv?: (ctx: MulDivContext) => void;
	/**
	 * Exit a parse tree produced by the `MulDiv`
	 * labeled alternative in `fusionParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMulDiv?: (ctx: MulDivContext) => void;

	/**
	 * Enter a parse tree produced by the `AddSub`
	 * labeled alternative in `fusionParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAddSub?: (ctx: AddSubContext) => void;
	/**
	 * Exit a parse tree produced by the `AddSub`
	 * labeled alternative in `fusionParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAddSub?: (ctx: AddSubContext) => void;

	/**
	 * Enter a parse tree produced by the `int`
	 * labeled alternative in `fusionParser.expr`.
	 * @param ctx the parse tree
	 */
	enterInt?: (ctx: IntContext) => void;
	/**
	 * Exit a parse tree produced by the `int`
	 * labeled alternative in `fusionParser.expr`.
	 * @param ctx the parse tree
	 */
	exitInt?: (ctx: IntContext) => void;

	/**
	 * Enter a parse tree produced by the `id`
	 * labeled alternative in `fusionParser.expr`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by the `id`
	 * labeled alternative in `fusionParser.expr`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by the `parens`
	 * labeled alternative in `fusionParser.expr`.
	 * @param ctx the parse tree
	 */
	enterParens?: (ctx: ParensContext) => void;
	/**
	 * Exit a parse tree produced by the `parens`
	 * labeled alternative in `fusionParser.expr`.
	 * @param ctx the parse tree
	 */
	exitParens?: (ctx: ParensContext) => void;

	/**
	 * Enter a parse tree produced by `fusionParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `fusionParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `fusionParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat?: (ctx: StatContext) => void;
	/**
	 * Exit a parse tree produced by `fusionParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat?: (ctx: StatContext) => void;

	/**
	 * Enter a parse tree produced by `fusionParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `fusionParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
}

