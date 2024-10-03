// Generated from fusion.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { fusionListener } from "./fusionListener";

export class fusionParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly RETURN = 16;
	public static readonly STR_LIT = 17;
	public static readonly ID = 18;
	public static readonly INT = 19;
	public static readonly NEWLINE = 20;
	public static readonly WS = 21;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_functionCall = 3;
	public static readonly RULE_block = 4;
	public static readonly RULE_funcDef = 5;
	public static readonly RULE_ifStatement = 6;
	public static readonly RULE_whileLoop = 7;
	public static readonly RULE_forLoop = 8;
	public static readonly RULE_funcDefArgList = 9;
	public static readonly RULE_funcDefArg = 10;
	public static readonly RULE_varDecl = 11;
	public static readonly RULE_assign = 12;
	public static readonly RULE_returnStatement = 13;
	public static readonly RULE_argList = 14;
	public static readonly RULE_arg = 15;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "expression", "functionCall", "block", "funcDef", 
		"ifStatement", "whileLoop", "forLoop", "funcDefArgList", "funcDefArg", 
		"varDecl", "assign", "returnStatement", "argList", "arg",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'+'", "'-'", "'>'", "'<'", "'('", "')'", "'{'", "'}'", "'if'", 
		"'while'", "'for'", "'to'", "','", "':'", "'='", "'return'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "RETURN", "STR_LIT", "ID", "INT", "NEWLINE", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(fusionParser._LITERAL_NAMES, fusionParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return fusionParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "fusion.g4"; }

	// @Override
	public get ruleNames(): string[] { return fusionParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return fusionParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(fusionParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, fusionParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 32;
				this.statement();
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fusionParser.T__8) | (1 << fusionParser.T__9) | (1 << fusionParser.T__10) | (1 << fusionParser.RETURN) | (1 << fusionParser.STR_LIT) | (1 << fusionParser.ID) | (1 << fusionParser.INT))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, fusionParser.RULE_statement);
		try {
			this.state = 45;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 37;
				this.returnStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 38;
				this.ifStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 39;
				this.whileLoop();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 40;
				this.forLoop();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 41;
				this.varDecl();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 42;
				this.assign();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 43;
				this.funcDef();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 44;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, fusionParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				_localctx = new IntContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 48;
				this.match(fusionParser.INT);
				}
				break;

			case 2:
				{
				_localctx = new FuncCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 49;
				this.functionCall();
				}
				break;

			case 3:
				{
				_localctx = new IdContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 50;
				this.match(fusionParser.ID);
				}
				break;

			case 4:
				{
				_localctx = new StrLitContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 51;
				this.match(fusionParser.STR_LIT);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 62;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 60;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						_localctx = new AddSubContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, fusionParser.RULE_expression);
						this.state = 54;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 55;
						_la = this._input.LA(1);
						if (!(_la === fusionParser.T__0 || _la === fusionParser.T__1)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 56;
						this.expression(6);
						}
						break;

					case 2:
						{
						_localctx = new NumCompContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, fusionParser.RULE_expression);
						this.state = 57;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 58;
						_la = this._input.LA(1);
						if (!(_la === fusionParser.T__2 || _la === fusionParser.T__3)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 59;
						this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, fusionParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.match(fusionParser.ID);
			this.state = 66;
			this.match(fusionParser.T__4);
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fusionParser.STR_LIT) | (1 << fusionParser.ID) | (1 << fusionParser.INT))) !== 0)) {
				{
				this.state = 67;
				this.argList();
				}
			}

			this.state = 70;
			this.match(fusionParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, fusionParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(fusionParser.T__6);
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fusionParser.T__8) | (1 << fusionParser.T__9) | (1 << fusionParser.T__10) | (1 << fusionParser.RETURN) | (1 << fusionParser.STR_LIT) | (1 << fusionParser.ID) | (1 << fusionParser.INT))) !== 0)) {
				{
				{
				this.state = 73;
				this.statement();
				}
				}
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 79;
			this.match(fusionParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcDef(): FuncDefContext {
		let _localctx: FuncDefContext = new FuncDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, fusionParser.RULE_funcDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this.match(fusionParser.ID);
			this.state = 82;
			this.match(fusionParser.T__4);
			this.state = 83;
			this.funcDefArgList();
			this.state = 84;
			this.match(fusionParser.T__5);
			this.state = 85;
			this.match(fusionParser.ID);
			this.state = 86;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, fusionParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.match(fusionParser.T__8);
			this.state = 89;
			this.expression(0);
			this.state = 90;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileLoop(): WhileLoopContext {
		let _localctx: WhileLoopContext = new WhileLoopContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, fusionParser.RULE_whileLoop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(fusionParser.T__9);
			this.state = 93;
			this.expression(0);
			this.state = 94;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forLoop(): ForLoopContext {
		let _localctx: ForLoopContext = new ForLoopContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, fusionParser.RULE_forLoop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.match(fusionParser.T__10);
			this.state = 97;
			this.expression(0);
			this.state = 98;
			this.match(fusionParser.T__11);
			this.state = 99;
			this.expression(0);
			this.state = 100;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcDefArgList(): FuncDefArgListContext {
		let _localctx: FuncDefArgListContext = new FuncDefArgListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, fusionParser.RULE_funcDefArgList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.funcDefArg();
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === fusionParser.T__12) {
				{
				{
				this.state = 103;
				this.match(fusionParser.T__12);
				this.state = 104;
				this.funcDefArg();
				}
				}
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcDefArg(): FuncDefArgContext {
		let _localctx: FuncDefArgContext = new FuncDefArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, fusionParser.RULE_funcDefArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this.match(fusionParser.ID);
			this.state = 111;
			this.match(fusionParser.T__13);
			this.state = 112;
			this.match(fusionParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varDecl(): VarDeclContext {
		let _localctx: VarDeclContext = new VarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, fusionParser.RULE_varDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.match(fusionParser.ID);
			this.state = 115;
			this.match(fusionParser.ID);
			this.state = 116;
			this.match(fusionParser.T__14);
			this.state = 117;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assign(): AssignContext {
		let _localctx: AssignContext = new AssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, fusionParser.RULE_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this.match(fusionParser.ID);
			this.state = 120;
			this.match(fusionParser.T__14);
			this.state = 121;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, fusionParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			_localctx._ret = this.match(fusionParser.RETURN);
			this.state = 124;
			_localctx._expr = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argList(): ArgListContext {
		let _localctx: ArgListContext = new ArgListContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, fusionParser.RULE_argList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.arg();
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === fusionParser.T__12) {
				{
				{
				this.state = 127;
				this.match(fusionParser.T__12);
				this.state = 128;
				this.arg();
				}
				}
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arg(): ArgContext {
		let _localctx: ArgContext = new ArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, fusionParser.RULE_arg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x17\x8B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x06\x02$" +
		"\n\x02\r\x02\x0E\x02%\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x030\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x05\x047\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04" +
		"?\n\x04\f\x04\x0E\x04B\v\x04\x03\x05\x03\x05\x03\x05\x05\x05G\n\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x07\x06M\n\x06\f\x06\x0E\x06P\v\x06\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b" +
		"\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x07\vl\n\v\f\v\x0E\vo\v\v\x03\f\x03\f\x03\f" +
		"\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x07\x10\x84\n\x10\f\x10\x0E" +
		"\x10\x87\v\x10\x03\x11\x03\x11\x03\x11\x02\x02\x03\x06\x12\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\x02\x04\x03\x02\x03\x04\x03\x02" +
		"\x05\x06\x02\x8B\x02#\x03\x02\x02\x02\x04/\x03\x02\x02\x02\x066\x03\x02" +
		"\x02\x02\bC\x03\x02\x02\x02\nJ\x03\x02\x02\x02\fS\x03\x02\x02\x02\x0E" +
		"Z\x03\x02\x02\x02\x10^\x03\x02\x02\x02\x12b\x03\x02\x02\x02\x14h\x03\x02" +
		"\x02\x02\x16p\x03\x02\x02\x02\x18t\x03\x02\x02\x02\x1Ay\x03\x02\x02\x02" +
		"\x1C}\x03\x02\x02\x02\x1E\x80\x03\x02\x02\x02 \x88\x03\x02\x02\x02\"$" +
		"\x05\x04\x03\x02#\"\x03\x02\x02\x02$%\x03\x02\x02\x02%#\x03\x02\x02\x02" +
		"%&\x03\x02\x02\x02&\x03\x03\x02\x02\x02\'0\x05\x1C\x0F\x02(0\x05\x0E\b" +
		"\x02)0\x05\x10\t\x02*0\x05\x12\n\x02+0\x05\x18\r\x02,0\x05\x1A\x0E\x02" +
		"-0\x05\f\x07\x02.0\x05\x06\x04\x02/\'\x03\x02\x02\x02/(\x03\x02\x02\x02" +
		"/)\x03\x02\x02\x02/*\x03\x02\x02\x02/+\x03\x02\x02\x02/,\x03\x02\x02\x02" +
		"/-\x03\x02\x02\x02/.\x03\x02\x02\x020\x05\x03\x02\x02\x0212\b\x04\x01" +
		"\x0227\x07\x15\x02\x0237\x05\b\x05\x0247\x07\x14\x02\x0257\x07\x13\x02" +
		"\x0261\x03\x02\x02\x0263\x03\x02\x02\x0264\x03\x02\x02\x0265\x03\x02\x02" +
		"\x027@\x03\x02\x02\x0289\f\x07\x02\x029:\t\x02\x02\x02:?\x05\x06\x04\b" +
		";<\f\x03\x02\x02<=\t\x03\x02\x02=?\x05\x06\x04\x04>8\x03\x02\x02\x02>" +
		";\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02" +
		"A\x07\x03\x02\x02\x02B@\x03\x02\x02\x02CD\x07\x14\x02\x02DF\x07\x07\x02" +
		"\x02EG\x05\x1E\x10\x02FE\x03\x02\x02\x02FG\x03\x02\x02\x02GH\x03\x02\x02" +
		"\x02HI\x07\b\x02\x02I\t\x03\x02\x02\x02JN\x07\t\x02\x02KM\x05\x04\x03" +
		"\x02LK\x03\x02\x02\x02MP\x03\x02\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02" +
		"\x02OQ\x03\x02\x02\x02PN\x03\x02\x02\x02QR\x07\n\x02\x02R\v\x03\x02\x02" +
		"\x02ST\x07\x14\x02\x02TU\x07\x07\x02\x02UV\x05\x14\v\x02VW\x07\b\x02\x02" +
		"WX\x07\x14\x02\x02XY\x05\n\x06\x02Y\r\x03\x02\x02\x02Z[\x07\v\x02\x02" +
		"[\\\x05\x06\x04\x02\\]\x05\n\x06\x02]\x0F\x03\x02\x02\x02^_\x07\f\x02" +
		"\x02_`\x05\x06\x04\x02`a\x05\n\x06\x02a\x11\x03\x02\x02\x02bc\x07\r\x02" +
		"\x02cd\x05\x06\x04\x02de\x07\x0E\x02\x02ef\x05\x06\x04\x02fg\x05\n\x06" +
		"\x02g\x13\x03\x02\x02\x02hm\x05\x16\f\x02ij\x07\x0F\x02\x02jl\x05\x16" +
		"\f\x02ki\x03\x02\x02\x02lo\x03\x02\x02\x02mk\x03\x02\x02\x02mn\x03\x02" +
		"\x02\x02n\x15\x03\x02\x02\x02om\x03\x02\x02\x02pq\x07\x14\x02\x02qr\x07" +
		"\x10\x02\x02rs\x07\x14\x02\x02s\x17\x03\x02\x02\x02tu\x07\x14\x02\x02" +
		"uv\x07\x14\x02\x02vw\x07\x11\x02\x02wx\x05\x06\x04\x02x\x19\x03\x02\x02" +
		"\x02yz\x07\x14\x02\x02z{\x07\x11\x02\x02{|\x05\x06\x04\x02|\x1B\x03\x02" +
		"\x02\x02}~\x07\x12\x02\x02~\x7F\x05\x06\x04\x02\x7F\x1D\x03\x02\x02\x02" +
		"\x80\x85\x05 \x11\x02\x81\x82\x07\x0F\x02\x02\x82\x84\x05 \x11\x02\x83" +
		"\x81\x03\x02\x02\x02\x84\x87\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85" +
		"\x86\x03\x02\x02\x02\x86\x1F\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x88" +
		"\x89\x05\x06\x04\x02\x89!\x03\x02\x02\x02\v%/6>@FNm\x85";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!fusionParser.__ATN) {
			fusionParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(fusionParser._serializedATN));
		}

		return fusionParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fusionParser.RULE_program; }
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public whileLoop(): WhileLoopContext | undefined {
		return this.tryGetRuleContext(0, WhileLoopContext);
	}
	public forLoop(): ForLoopContext | undefined {
		return this.tryGetRuleContext(0, ForLoopContext);
	}
	public varDecl(): VarDeclContext | undefined {
		return this.tryGetRuleContext(0, VarDeclContext);
	}
	public assign(): AssignContext | undefined {
		return this.tryGetRuleContext(0, AssignContext);
	}
	public funcDef(): FuncDefContext | undefined {
		return this.tryGetRuleContext(0, FuncDefContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fusionParser.RULE_statement; }
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fusionParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IntContext extends ExpressionContext {
	public INT(): TerminalNode { return this.getToken(fusionParser.INT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterInt) {
			listener.enterInt(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitInt) {
			listener.exitInt(this);
		}
	}
}
export class AddSubContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterAddSub) {
			listener.enterAddSub(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitAddSub) {
			listener.exitAddSub(this);
		}
	}
}
export class FuncCallContext extends ExpressionContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterFuncCall) {
			listener.enterFuncCall(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitFuncCall) {
			listener.exitFuncCall(this);
		}
	}
}
export class IdContext extends ExpressionContext {
	public ID(): TerminalNode { return this.getToken(fusionParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
}
export class StrLitContext extends ExpressionContext {
	public STR_LIT(): TerminalNode { return this.getToken(fusionParser.STR_LIT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterStrLit) {
			listener.enterStrLit(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitStrLit) {
			listener.exitStrLit(this);
		}
	}
}
export class NumCompContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterNumComp) {
			listener.enterNumComp(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitNumComp) {
			listener.exitNumComp(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(fusionParser.ID, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fusionParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fusionParser.RULE_block; }
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class FuncDefContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(fusionParser.ID);
		} else {
			return this.getToken(fusionParser.ID, i);
		}
	}
	public funcDefArgList(): FuncDefArgListContext {
		return this.getRuleContext(0, FuncDefArgListContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fusionParser.RULE_funcDef; }
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterFuncDef) {
			listener.enterFuncDef(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitFuncDef) {
			listener.exitFuncDef(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fusionParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
}


export class WhileLoopContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fusionParser.RULE_whileLoop; }
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterWhileLoop) {
			listener.enterWhileLoop(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitWhileLoop) {
			listener.exitWhileLoop(this);
		}
	}
}


export class ForLoopContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fusionParser.RULE_forLoop; }
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterForLoop) {
			listener.enterForLoop(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitForLoop) {
			listener.exitForLoop(this);
		}
	}
}


export class FuncDefArgListContext extends ParserRuleContext {
	public funcDefArg(): FuncDefArgContext[];
	public funcDefArg(i: number): FuncDefArgContext;
	public funcDefArg(i?: number): FuncDefArgContext | FuncDefArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FuncDefArgContext);
		} else {
			return this.getRuleContext(i, FuncDefArgContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fusionParser.RULE_funcDefArgList; }
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterFuncDefArgList) {
			listener.enterFuncDefArgList(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitFuncDefArgList) {
			listener.exitFuncDefArgList(this);
		}
	}
}


export class FuncDefArgContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(fusionParser.ID);
		} else {
			return this.getToken(fusionParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fusionParser.RULE_funcDefArg; }
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterFuncDefArg) {
			listener.enterFuncDefArg(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitFuncDefArg) {
			listener.exitFuncDefArg(this);
		}
	}
}


export class VarDeclContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(fusionParser.ID);
		} else {
			return this.getToken(fusionParser.ID, i);
		}
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fusionParser.RULE_varDecl; }
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterVarDecl) {
			listener.enterVarDecl(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitVarDecl) {
			listener.exitVarDecl(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(fusionParser.ID, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fusionParser.RULE_assign; }
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterAssign) {
			listener.enterAssign(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitAssign) {
			listener.exitAssign(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public _ret!: Token;
	public _expr!: ExpressionContext;
	public RETURN(): TerminalNode { return this.getToken(fusionParser.RETURN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fusionParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
}


export class ArgListContext extends ParserRuleContext {
	public arg(): ArgContext[];
	public arg(i: number): ArgContext;
	public arg(i?: number): ArgContext | ArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgContext);
		} else {
			return this.getRuleContext(i, ArgContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fusionParser.RULE_argList; }
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterArgList) {
			listener.enterArgList(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitArgList) {
			listener.exitArgList(this);
		}
	}
}


export class ArgContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fusionParser.RULE_arg; }
	// @Override
	public enterRule(listener: fusionListener): void {
		if (listener.enterArg) {
			listener.enterArg(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitArg) {
			listener.exitArg(this);
		}
	}
}


