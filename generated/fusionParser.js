"use strict";
// Generated from fusion.g4 by ANTLR 4.9.0-SNAPSHOT
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParensContext = exports.IdContext = exports.IntContext = exports.AddSubContext = exports.MulDivContext = exports.ExprContext = exports.BlankContext = exports.AssignContext = exports.PrintExprContext = exports.StatContext = exports.ProgContext = exports.fusionParser = void 0;
var ATN_1 = require("antlr4ts/atn/ATN");
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var fusionParser = /** @class */ (function (_super) {
    __extends(fusionParser, _super);
    function fusionParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(fusionParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(fusionParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return fusionParser.VOCABULARY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(fusionParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "fusion.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(fusionParser.prototype, "ruleNames", {
        // @Override
        get: function () { return fusionParser.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(fusionParser.prototype, "serializedATN", {
        // @Override
        get: function () { return fusionParser._serializedATN; },
        enumerable: false,
        configurable: true
    });
    fusionParser.prototype.createFailedPredicateException = function (predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    };
    // @RuleVersion(0)
    fusionParser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, fusionParser.RULE_prog);
        var _la;
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
                            this.stat();
                        }
                    }
                    this.state = 9;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fusionParser.T__5) | (1 << fusionParser.ID) | (1 << fusionParser.INT) | (1 << fusionParser.NEWLINE))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    fusionParser.prototype.stat = function () {
        var _localctx = new StatContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, fusionParser.RULE_stat);
        try {
            this.state = 20;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    _localctx = new PrintExprContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 11;
                        this.expr(0);
                        this.state = 12;
                        this.match(fusionParser.NEWLINE);
                    }
                    break;
                case 2:
                    _localctx = new AssignContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 14;
                        this.match(fusionParser.ID);
                        this.state = 15;
                        this.match(fusionParser.T__0);
                        this.state = 16;
                        this.expr(0);
                        this.state = 17;
                        this.match(fusionParser.NEWLINE);
                    }
                    break;
                case 3:
                    _localctx = new BlankContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 19;
                        this.match(fusionParser.NEWLINE);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    fusionParser.prototype.expr = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExprContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 4;
        this.enterRecursionRule(_localctx, 4, fusionParser.RULE_expr, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 29;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case fusionParser.INT:
                        {
                            _localctx = new IntContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 23;
                            this.match(fusionParser.INT);
                        }
                        break;
                    case fusionParser.ID:
                        {
                            _localctx = new IdContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 24;
                            this.match(fusionParser.ID);
                        }
                        break;
                    case fusionParser.T__5:
                        {
                            _localctx = new ParensContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 25;
                            this.match(fusionParser.T__5);
                            this.state = 26;
                            this.expr(0);
                            this.state = 27;
                            this.match(fusionParser.T__6);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 39;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 37;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new MulDivContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, fusionParser.RULE_expr);
                                        this.state = 31;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 32;
                                        _la = this._input.LA(1);
                                        if (!(_la === fusionParser.T__1 || _la === fusionParser.T__2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 33;
                                        this.expr(6);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new AddSubContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, fusionParser.RULE_expr);
                                        this.state = 34;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 35;
                                        _la = this._input.LA(1);
                                        if (!(_la === fusionParser.T__3 || _la === fusionParser.T__4)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 36;
                                        this.expr(5);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 41;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    fusionParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 2:
                return this.expr_sempred(_localctx, predIndex);
        }
        return true;
    };
    fusionParser.prototype.expr_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 5);
            case 1:
                return this.precpred(this._ctx, 4);
        }
        return true;
    };
    Object.defineProperty(fusionParser, "_ATN", {
        get: function () {
            if (!fusionParser.__ATN) {
                fusionParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(fusionParser._serializedATN));
            }
            return fusionParser.__ATN;
        },
        enumerable: false,
        configurable: true
    });
    fusionParser.T__0 = 1;
    fusionParser.T__1 = 2;
    fusionParser.T__2 = 3;
    fusionParser.T__3 = 4;
    fusionParser.T__4 = 5;
    fusionParser.T__5 = 6;
    fusionParser.T__6 = 7;
    fusionParser.ID = 8;
    fusionParser.INT = 9;
    fusionParser.NEWLINE = 10;
    fusionParser.WS = 11;
    fusionParser.RULE_prog = 0;
    fusionParser.RULE_stat = 1;
    fusionParser.RULE_expr = 2;
    // tslint:disable:no-trailing-whitespace
    fusionParser.ruleNames = [
        "prog", "stat", "expr",
    ];
    fusionParser._LITERAL_NAMES = [
        undefined, "'='", "'*'", "'/'", "'+'", "'-'", "'('", "')'",
    ];
    fusionParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "ID", "INT", "NEWLINE", "WS",
    ];
    fusionParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(fusionParser._LITERAL_NAMES, fusionParser._SYMBOLIC_NAMES, []);
    fusionParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r-\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x06\x02\n\n\x02\r\x02\x0E\x02" +
        "\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x05\x03\x17\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x05\x04 \n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x07\x04(\n\x04\f\x04\x0E\x04+\v\x04\x03\x04\x02\x02\x03\x06\x05\x02\x02" +
        "\x04\x02\x06\x02\x02\x04\x03\x02\x04\x05\x03\x02\x06\x07\x020\x02\t\x03" +
        "\x02\x02\x02\x04\x16\x03\x02\x02\x02\x06\x1F\x03\x02\x02\x02\b\n\x05\x04" +
        "\x03\x02\t\b\x03\x02\x02\x02\n\v\x03\x02\x02\x02\v\t\x03\x02\x02\x02\v" +
        "\f\x03\x02\x02\x02\f\x03\x03\x02\x02\x02\r\x0E\x05\x06\x04\x02\x0E\x0F" +
        "\x07\f\x02\x02\x0F\x17\x03\x02\x02\x02\x10\x11\x07\n\x02\x02\x11\x12\x07" +
        "\x03\x02\x02\x12\x13\x05\x06\x04\x02\x13\x14\x07\f\x02\x02\x14\x17\x03" +
        "\x02\x02\x02\x15\x17\x07\f\x02\x02\x16\r\x03\x02\x02\x02\x16\x10\x03\x02" +
        "\x02\x02\x16\x15\x03\x02\x02\x02\x17\x05\x03\x02\x02\x02\x18\x19\b\x04" +
        "\x01\x02\x19 \x07\v\x02\x02\x1A \x07\n\x02\x02\x1B\x1C\x07\b\x02\x02\x1C" +
        "\x1D\x05\x06\x04\x02\x1D\x1E\x07\t\x02\x02\x1E \x03\x02\x02\x02\x1F\x18" +
        "\x03\x02\x02\x02\x1F\x1A\x03\x02\x02\x02\x1F\x1B\x03\x02\x02\x02 )\x03" +
        "\x02\x02\x02!\"\f\x07\x02\x02\"#\t\x02\x02\x02#(\x05\x06\x04\b$%\f\x06" +
        "\x02\x02%&\t\x03\x02\x02&(\x05\x06\x04\x07\'!\x03\x02\x02\x02\'$\x03\x02" +
        "\x02\x02(+\x03\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02\x02*\x07\x03" +
        "\x02\x02\x02+)\x03\x02\x02\x02\x07\v\x16\x1F\')";
    return fusionParser;
}(Parser_1.Parser));
exports.fusionParser = fusionParser;
var ProgContext = /** @class */ (function (_super) {
    __extends(ProgContext, _super);
    function ProgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgContext.prototype.stat = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatContext);
        }
        else {
            return this.getRuleContext(i, StatContext);
        }
    };
    Object.defineProperty(ProgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return fusionParser.RULE_prog; },
        enumerable: false,
        configurable: true
    });
    // @Override
    ProgContext.prototype.enterRule = function (listener) {
        if (listener.enterProg) {
            listener.enterProg(this);
        }
    };
    // @Override
    ProgContext.prototype.exitRule = function (listener) {
        if (listener.exitProg) {
            listener.exitProg(this);
        }
    };
    return ProgContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgContext = ProgContext;
var StatContext = /** @class */ (function (_super) {
    __extends(StatContext, _super);
    function StatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(StatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return fusionParser.RULE_stat; },
        enumerable: false,
        configurable: true
    });
    StatContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return StatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatContext = StatContext;
var PrintExprContext = /** @class */ (function (_super) {
    __extends(PrintExprContext, _super);
    function PrintExprContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PrintExprContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    PrintExprContext.prototype.NEWLINE = function () { return this.getToken(fusionParser.NEWLINE, 0); };
    // @Override
    PrintExprContext.prototype.enterRule = function (listener) {
        if (listener.enterPrintExpr) {
            listener.enterPrintExpr(this);
        }
    };
    // @Override
    PrintExprContext.prototype.exitRule = function (listener) {
        if (listener.exitPrintExpr) {
            listener.exitPrintExpr(this);
        }
    };
    return PrintExprContext;
}(StatContext));
exports.PrintExprContext = PrintExprContext;
var AssignContext = /** @class */ (function (_super) {
    __extends(AssignContext, _super);
    function AssignContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AssignContext.prototype.ID = function () { return this.getToken(fusionParser.ID, 0); };
    AssignContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    AssignContext.prototype.NEWLINE = function () { return this.getToken(fusionParser.NEWLINE, 0); };
    // @Override
    AssignContext.prototype.enterRule = function (listener) {
        if (listener.enterAssign) {
            listener.enterAssign(this);
        }
    };
    // @Override
    AssignContext.prototype.exitRule = function (listener) {
        if (listener.exitAssign) {
            listener.exitAssign(this);
        }
    };
    return AssignContext;
}(StatContext));
exports.AssignContext = AssignContext;
var BlankContext = /** @class */ (function (_super) {
    __extends(BlankContext, _super);
    function BlankContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BlankContext.prototype.NEWLINE = function () { return this.getToken(fusionParser.NEWLINE, 0); };
    // @Override
    BlankContext.prototype.enterRule = function (listener) {
        if (listener.enterBlank) {
            listener.enterBlank(this);
        }
    };
    // @Override
    BlankContext.prototype.exitRule = function (listener) {
        if (listener.exitBlank) {
            listener.exitBlank(this);
        }
    };
    return BlankContext;
}(StatContext));
exports.BlankContext = BlankContext;
var ExprContext = /** @class */ (function (_super) {
    __extends(ExprContext, _super);
    function ExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return fusionParser.RULE_expr; },
        enumerable: false,
        configurable: true
    });
    ExprContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return ExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprContext = ExprContext;
var MulDivContext = /** @class */ (function (_super) {
    __extends(MulDivContext, _super);
    function MulDivContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MulDivContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    // @Override
    MulDivContext.prototype.enterRule = function (listener) {
        if (listener.enterMulDiv) {
            listener.enterMulDiv(this);
        }
    };
    // @Override
    MulDivContext.prototype.exitRule = function (listener) {
        if (listener.exitMulDiv) {
            listener.exitMulDiv(this);
        }
    };
    return MulDivContext;
}(ExprContext));
exports.MulDivContext = MulDivContext;
var AddSubContext = /** @class */ (function (_super) {
    __extends(AddSubContext, _super);
    function AddSubContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AddSubContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    // @Override
    AddSubContext.prototype.enterRule = function (listener) {
        if (listener.enterAddSub) {
            listener.enterAddSub(this);
        }
    };
    // @Override
    AddSubContext.prototype.exitRule = function (listener) {
        if (listener.exitAddSub) {
            listener.exitAddSub(this);
        }
    };
    return AddSubContext;
}(ExprContext));
exports.AddSubContext = AddSubContext;
var IntContext = /** @class */ (function (_super) {
    __extends(IntContext, _super);
    function IntContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    IntContext.prototype.INT = function () { return this.getToken(fusionParser.INT, 0); };
    // @Override
    IntContext.prototype.enterRule = function (listener) {
        if (listener.enterInt) {
            listener.enterInt(this);
        }
    };
    // @Override
    IntContext.prototype.exitRule = function (listener) {
        if (listener.exitInt) {
            listener.exitInt(this);
        }
    };
    return IntContext;
}(ExprContext));
exports.IntContext = IntContext;
var IdContext = /** @class */ (function (_super) {
    __extends(IdContext, _super);
    function IdContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    IdContext.prototype.ID = function () { return this.getToken(fusionParser.ID, 0); };
    // @Override
    IdContext.prototype.enterRule = function (listener) {
        if (listener.enterId) {
            listener.enterId(this);
        }
    };
    // @Override
    IdContext.prototype.exitRule = function (listener) {
        if (listener.exitId) {
            listener.exitId(this);
        }
    };
    return IdContext;
}(ExprContext));
exports.IdContext = IdContext;
var ParensContext = /** @class */ (function (_super) {
    __extends(ParensContext, _super);
    function ParensContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ParensContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    // @Override
    ParensContext.prototype.enterRule = function (listener) {
        if (listener.enterParens) {
            listener.enterParens(this);
        }
    };
    // @Override
    ParensContext.prototype.exitRule = function (listener) {
        if (listener.exitParens) {
            listener.exitParens(this);
        }
    };
    return ParensContext;
}(ExprContext));
exports.ParensContext = ParensContext;
