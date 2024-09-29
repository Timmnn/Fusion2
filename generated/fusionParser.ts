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
	public static readonly RETURN = 9;
	public static readonly STR_LIT = 10;
	public static readonly ID = 11;
	public static readonly INT = 12;
	public static readonly NEWLINE = 13;
	public static readonly WS = 14;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_functionCall = 3;
	public static readonly RULE_block = 4;
	public static readonly RULE_funcDef = 5;
	public static readonly RULE_funcDefArgList = 6;
	public static readonly RULE_funcDefArg = 7;
	public static readonly RULE_returnStatement = 8;
	public static readonly RULE_argList = 9;
	public static readonly RULE_arg = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "expression", "functionCall", "block", "funcDef", 
		"funcDefArgList", "funcDefArg", "returnStatement", "argList", "arg",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'+'", "'-'", "'('", "')'", "'{'", "'}'", "','", "':'", "'return'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
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
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 22;
				this.statement();
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fusionParser.RETURN) | (1 << fusionParser.STR_LIT) | (1 << fusionParser.ID) | (1 << fusionParser.INT))) !== 0));
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
			this.state = 30;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 27;
				this.returnStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 28;
				this.funcDef();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 29;
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
			this.state = 37;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				_localctx = new IntContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 33;
				this.match(fusionParser.INT);
				}
				break;

			case 2:
				{
				_localctx = new FuncCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 34;
				this.functionCall();
				}
				break;

			case 3:
				{
				_localctx = new IdContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 35;
				this.match(fusionParser.ID);
				}
				break;

			case 4:
				{
				_localctx = new StrLitContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 36;
				this.match(fusionParser.STR_LIT);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 44;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new AddSubContext(new ExpressionContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, fusionParser.RULE_expression);
					this.state = 39;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 40;
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
					this.state = 41;
					this.expression(5);
					}
					}
				}
				this.state = 46;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
			this.state = 47;
			this.match(fusionParser.ID);
			this.state = 48;
			this.match(fusionParser.T__2);
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fusionParser.STR_LIT) | (1 << fusionParser.ID) | (1 << fusionParser.INT))) !== 0)) {
				{
				this.state = 49;
				this.argList();
				}
			}

			this.state = 52;
			this.match(fusionParser.T__3);
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
			this.state = 54;
			this.match(fusionParser.T__4);
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fusionParser.RETURN) | (1 << fusionParser.STR_LIT) | (1 << fusionParser.ID) | (1 << fusionParser.INT))) !== 0)) {
				{
				{
				this.state = 55;
				this.statement();
				}
				}
				this.state = 60;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 61;
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
	public funcDef(): FuncDefContext {
		let _localctx: FuncDefContext = new FuncDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, fusionParser.RULE_funcDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.match(fusionParser.ID);
			this.state = 64;
			this.match(fusionParser.T__2);
			this.state = 65;
			this.funcDefArgList();
			this.state = 66;
			this.match(fusionParser.T__3);
			this.state = 67;
			this.match(fusionParser.ID);
			this.state = 68;
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
		this.enterRule(_localctx, 12, fusionParser.RULE_funcDefArgList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.funcDefArg();
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === fusionParser.T__6) {
				{
				{
				this.state = 71;
				this.match(fusionParser.T__6);
				this.state = 72;
				this.funcDefArg();
				}
				}
				this.state = 77;
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
		this.enterRule(_localctx, 14, fusionParser.RULE_funcDefArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.match(fusionParser.ID);
			this.state = 79;
			this.match(fusionParser.T__7);
			this.state = 80;
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
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, fusionParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			_localctx._ret = this.match(fusionParser.RETURN);
			this.state = 83;
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
		this.enterRule(_localctx, 18, fusionParser.RULE_argList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.arg();
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === fusionParser.T__6) {
				{
				{
				this.state = 86;
				this.match(fusionParser.T__6);
				this.state = 87;
				this.arg();
				}
				}
				this.state = 92;
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
		this.enterRule(_localctx, 20, fusionParser.RULE_arg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
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
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10b\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x06\x02" +
		"\x1A\n\x02\r\x02\x0E\x02\x1B\x03\x03\x03\x03\x03\x03\x05\x03!\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04(\n\x04\x03\x04\x03\x04\x03" +
		"\x04\x07\x04-\n\x04\f\x04\x0E\x040\v\x04\x03\x05\x03\x05\x03\x05\x05\x05" +
		"5\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x07\x06;\n\x06\f\x06\x0E\x06>" +
		"\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x07\bL\n\b\f\b\x0E\bO\v\b\x03\t\x03\t\x03\t" +
		"\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x07\v[\n\v\f\v\x0E\v^\v\v\x03" +
		"\f\x03\f\x03\f\x02\x02\x03\x06\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\x03\x03\x02\x03\x04\x02" +
		"a\x02\x19\x03\x02\x02\x02\x04 \x03\x02\x02\x02\x06\'\x03\x02\x02\x02\b" +
		"1\x03\x02\x02\x02\n8\x03\x02\x02\x02\fA\x03\x02\x02\x02\x0EH\x03\x02\x02" +
		"\x02\x10P\x03\x02\x02\x02\x12T\x03\x02\x02\x02\x14W\x03\x02\x02\x02\x16" +
		"_\x03\x02\x02\x02\x18\x1A\x05\x04\x03\x02\x19\x18\x03\x02\x02\x02\x1A" +
		"\x1B\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C" +
		"\x03\x03\x02\x02\x02\x1D!\x05\x12\n\x02\x1E!\x05\f\x07\x02\x1F!\x05\x06" +
		"\x04\x02 \x1D\x03\x02\x02\x02 \x1E\x03\x02\x02\x02 \x1F\x03\x02\x02\x02" +
		"!\x05\x03\x02\x02\x02\"#\b\x04\x01\x02#(\x07\x0E\x02\x02$(\x05\b\x05\x02" +
		"%(\x07\r\x02\x02&(\x07\f\x02\x02\'\"\x03\x02\x02\x02\'$\x03\x02\x02\x02" +
		"\'%\x03\x02\x02\x02\'&\x03\x02\x02\x02(.\x03\x02\x02\x02)*\f\x06\x02\x02" +
		"*+\t\x02\x02\x02+-\x05\x06\x04\x07,)\x03\x02\x02\x02-0\x03\x02\x02\x02" +
		".,\x03\x02\x02\x02./\x03\x02\x02\x02/\x07\x03\x02\x02\x020.\x03\x02\x02" +
		"\x0212\x07\r\x02\x0224\x07\x05\x02\x0235\x05\x14\v\x0243\x03\x02\x02\x02" +
		"45\x03\x02\x02\x0256\x03\x02\x02\x0267\x07\x06\x02\x027\t\x03\x02\x02" +
		"\x028<\x07\x07\x02\x029;\x05\x04\x03\x02:9\x03\x02\x02\x02;>\x03\x02\x02" +
		"\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02=?\x03\x02\x02\x02><\x03\x02\x02" +
		"\x02?@\x07\b\x02\x02@\v\x03\x02\x02\x02AB\x07\r\x02\x02BC\x07\x05\x02" +
		"\x02CD\x05\x0E\b\x02DE\x07\x06\x02\x02EF\x07\r\x02\x02FG\x05\n\x06\x02" +
		"G\r\x03\x02\x02\x02HM\x05\x10\t\x02IJ\x07\t\x02\x02JL\x05\x10\t\x02KI" +
		"\x03\x02\x02\x02LO\x03\x02\x02\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02" +
		"N\x0F\x03\x02\x02\x02OM\x03\x02\x02\x02PQ\x07\r\x02\x02QR\x07\n\x02\x02" +
		"RS\x07\r\x02\x02S\x11\x03\x02\x02\x02TU\x07\v\x02\x02UV\x05\x06\x04\x02" +
		"V\x13\x03\x02\x02\x02W\\\x05\x16\f\x02XY\x07\t\x02\x02Y[\x05\x16\f\x02" +
		"ZX\x03\x02\x02\x02[^\x03\x02\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02" +
		"\x02]\x15\x03\x02\x02\x02^\\\x03\x02\x02\x02_`\x05\x06\x04\x02`\x17\x03" +
		"\x02\x02\x02\n\x1B \'.4<M\\";
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


