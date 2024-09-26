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
	public static readonly ID = 5;
	public static readonly INT = 6;
	public static readonly NEWLINE = 7;
	public static readonly WS = 8;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_expression = 2;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'*'", "'/'", "'+'", "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "ID", "INT", "NEWLINE", 
		"WS",
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
			this.state = 7;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 6;
				this.statement();
				}
				}
				this.state = 9;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === fusionParser.INT);
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 11;
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
			{
			_localctx = new IntContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 14;
			this.match(fusionParser.INT);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 24;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 22;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
					case 1:
						{
						_localctx = new MultDivContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, fusionParser.RULE_expression);
						this.state = 16;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 17;
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
						this.state = 18;
						this.expression(4);
						}
						break;

					case 2:
						{
						_localctx = new AddSubContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, fusionParser.RULE_expression);
						this.state = 19;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 20;
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
						this.state = 21;
						this.expression(3);
						}
						break;
					}
					}
				}
				this.state = 26;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
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
			return this.precpred(this._ctx, 3);

		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\n\x1E\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x06\x02\n\n\x02\r\x02\x0E\x02" +
		"\v\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x04\x19\n\x04\f\x04\x0E\x04\x1C\v\x04\x03\x04" +
		"\x02\x02\x03\x06\x05\x02\x02\x04\x02\x06\x02\x02\x04\x03\x02\x03\x04\x03" +
		"\x02\x05\x06\x02\x1D\x02\t\x03\x02\x02\x02\x04\r\x03\x02\x02\x02\x06\x0F" +
		"\x03\x02\x02\x02\b\n\x05\x04\x03\x02\t\b\x03\x02\x02\x02\n\v\x03\x02\x02" +
		"\x02\v\t\x03\x02\x02\x02\v\f\x03\x02\x02\x02\f\x03\x03\x02\x02\x02\r\x0E" +
		"\x05\x06\x04\x02\x0E\x05\x03\x02\x02\x02\x0F\x10\b\x04\x01\x02\x10\x11" +
		"\x07\b\x02\x02\x11\x1A\x03\x02\x02\x02\x12\x13\f\x05\x02\x02\x13\x14\t" +
		"\x02\x02\x02\x14\x19\x05\x06\x04\x06\x15\x16\f\x04\x02\x02\x16\x17\t\x03" +
		"\x02\x02\x17\x19\x05\x06\x04\x05\x18\x12\x03\x02\x02\x02\x18\x15\x03\x02" +
		"\x02\x02\x19\x1C\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1A\x1B\x03\x02" +
		"\x02\x02\x1B\x07\x03\x02\x02\x02\x1C\x1A\x03\x02\x02\x02\x05\v\x18\x1A";
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
export class MultDivContext extends ExpressionContext {
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
		if (listener.enterMultDiv) {
			listener.enterMultDiv(this);
		}
	}
	// @Override
	public exitRule(listener: fusionListener): void {
		if (listener.exitMultDiv) {
			listener.exitMultDiv(this);
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


