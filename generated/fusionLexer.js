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
exports.fusionLexer = void 0;
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var Lexer_1 = require("antlr4ts/Lexer");
var LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var fusionLexer = /** @class */ (function (_super) {
    __extends(fusionLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function fusionLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(fusionLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(fusionLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return fusionLexer.VOCABULARY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(fusionLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "fusion.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(fusionLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return fusionLexer.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(fusionLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return fusionLexer._serializedATN; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(fusionLexer.prototype, "channelNames", {
        // @Override
        get: function () { return fusionLexer.channelNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(fusionLexer.prototype, "modeNames", {
        // @Override
        get: function () { return fusionLexer.modeNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(fusionLexer, "_ATN", {
        get: function () {
            if (!fusionLexer.__ATN) {
                fusionLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(fusionLexer._serializedATN));
            }
            return fusionLexer.__ATN;
        },
        enumerable: false,
        configurable: true
    });
    fusionLexer.T__0 = 1;
    fusionLexer.T__1 = 2;
    fusionLexer.T__2 = 3;
    fusionLexer.T__3 = 4;
    fusionLexer.T__4 = 5;
    fusionLexer.T__5 = 6;
    fusionLexer.T__6 = 7;
    fusionLexer.ID = 8;
    fusionLexer.INT = 9;
    fusionLexer.NEWLINE = 10;
    fusionLexer.WS = 11;
    // tslint:disable:no-trailing-whitespace
    fusionLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    fusionLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    fusionLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "ID", "INT", "NEWLINE",
        "WS",
    ];
    fusionLexer._LITERAL_NAMES = [
        undefined, "'='", "'*'", "'/'", "'+'", "'-'", "'('", "')'",
    ];
    fusionLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "ID", "INT", "NEWLINE", "WS",
    ];
    fusionLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(fusionLexer._LITERAL_NAMES, fusionLexer._SYMBOLIC_NAMES, []);
    fusionLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\r=\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
        "\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
        "\x07\x03\x07\x03\b\x03\b\x03\t\x06\t)\n\t\r\t\x0E\t*\x03\n\x06\n.\n\n" +
        "\r\n\x0E\n/\x03\v\x06\v3\n\v\r\v\x0E\v4\x03\f\x06\f8\n\f\r\f\x0E\f9\x03" +
        "\f\x03\f\x02\x02\x02\r\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v" +
        "\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x03" +
        "\x02\x06\x04\x02C\\c|\x03\x022;\x04\x02\f\f\x0F\x0F\x04\x02\v\v\"\"\x02" +
        "@\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02" +
        "\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02" +
        "\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02" +
        "\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x03\x19\x03\x02\x02\x02" +
        "\x05\x1B\x03\x02\x02\x02\x07\x1D\x03\x02\x02\x02\t\x1F\x03\x02\x02\x02" +
        "\v!\x03\x02\x02\x02\r#\x03\x02\x02\x02\x0F%\x03\x02\x02\x02\x11(\x03\x02" +
        "\x02\x02\x13-\x03\x02\x02\x02\x152\x03\x02\x02\x02\x177\x03\x02\x02\x02" +
        "\x19\x1A\x07?\x02\x02\x1A\x04\x03\x02\x02\x02\x1B\x1C\x07,\x02\x02\x1C" +
        "\x06\x03\x02\x02\x02\x1D\x1E\x071\x02\x02\x1E\b\x03\x02\x02\x02\x1F \x07" +
        "-\x02\x02 \n\x03\x02\x02\x02!\"\x07/\x02\x02\"\f\x03\x02\x02\x02#$\x07" +
        "*\x02\x02$\x0E\x03\x02\x02\x02%&\x07+\x02\x02&\x10\x03\x02\x02\x02\')" +
        "\t\x02\x02\x02(\'\x03\x02\x02\x02)*\x03\x02\x02\x02*(\x03\x02\x02\x02" +
        "*+\x03\x02\x02\x02+\x12\x03\x02\x02\x02,.\t\x03\x02\x02-,\x03\x02\x02" +
        "\x02./\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x020\x14\x03\x02" +
        "\x02\x0213\t\x04\x02\x0221\x03\x02\x02\x0234\x03\x02\x02\x0242\x03\x02" +
        "\x02\x0245\x03\x02\x02\x025\x16\x03\x02\x02\x0268\t\x05\x02\x0276\x03" +
        "\x02\x02\x0289\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:;\x03" +
        "\x02\x02\x02;<\b\f\x02\x02<\x18\x03\x02\x02\x02\x07\x02*/49\x03\b\x02" +
        "\x02";
    return fusionLexer;
}(Lexer_1.Lexer));
exports.fusionLexer = fusionLexer;
