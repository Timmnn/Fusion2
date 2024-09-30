// Generated from fusion.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class fusionLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly RETURN = 10;
	public static readonly STR_LIT = 11;
	public static readonly ID = 12;
	public static readonly INT = 13;
	public static readonly NEWLINE = 14;
	public static readonly WS = 15;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"RETURN", "STR_LIT", "ID", "INT", "NEWLINE", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'+'", "'-'", "'('", "')'", "'{'", "'}'", "','", "':'", "'='", 
		"'return'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "RETURN", "STR_LIT", "ID", "INT", "NEWLINE", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(fusionLexer._LITERAL_NAMES, fusionLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return fusionLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(fusionLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "fusion.g4"; }

	// @Override
	public get ruleNames(): string[] { return fusionLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return fusionLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return fusionLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return fusionLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x11]\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\f\x07\f?\n\f\f\f\x0E\fB\v\f\x03\f\x03\f\x03\r" +
		"\x06\rG\n\r\r\r\x0E\rH\x03\x0E\x06\x0EL\n\x0E\r\x0E\x0E\x0EM\x03\x0F\x06" +
		"\x0FQ\n\x0F\r\x0F\x0E\x0FR\x03\x0F\x03\x0F\x03\x10\x06\x10X\n\x10\r\x10" +
		"\x0E\x10Y\x03\x10\x03\x10\x02\x02\x02\x11\x03\x02\x03\x05\x02\x04\x07" +
		"\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15" +
		"\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11\x03\x02" +
		"\x07\x04\x02$$^^\x04\x02C\\c|\x03\x022;\x04\x02\f\f\x0F\x0F\x04\x02\v" +
		"\v\"\"\x02b\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03" +
		"\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02" +
		"\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02" +
		"\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02" +
		"\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02" +
		"\x02\x02\x03!\x03\x02\x02\x02\x05#\x03\x02\x02\x02\x07%\x03\x02\x02\x02" +
		"\t\'\x03\x02\x02\x02\v)\x03\x02\x02\x02\r+\x03\x02\x02\x02\x0F-\x03\x02" +
		"\x02\x02\x11/\x03\x02\x02\x02\x131\x03\x02\x02\x02\x153\x03\x02\x02\x02" +
		"\x17:\x03\x02\x02\x02\x19F\x03\x02\x02\x02\x1BK\x03\x02\x02\x02\x1DP\x03" +
		"\x02\x02\x02\x1FW\x03\x02\x02\x02!\"\x07-\x02\x02\"\x04\x03\x02\x02\x02" +
		"#$\x07/\x02\x02$\x06\x03\x02\x02\x02%&\x07*\x02\x02&\b\x03\x02\x02\x02" +
		"\'(\x07+\x02\x02(\n\x03\x02\x02\x02)*\x07}\x02\x02*\f\x03\x02\x02\x02" +
		"+,\x07\x7F\x02\x02,\x0E\x03\x02\x02\x02-.\x07.\x02\x02.\x10\x03\x02\x02" +
		"\x02/0\x07<\x02\x020\x12\x03\x02\x02\x0212\x07?\x02\x022\x14\x03\x02\x02" +
		"\x0234\x07t\x02\x0245\x07g\x02\x0256\x07v\x02\x0267\x07w\x02\x0278\x07" +
		"t\x02\x0289\x07p\x02\x029\x16\x03\x02\x02\x02:@\x07$\x02\x02;?\n\x02\x02" +
		"\x02<=\x07^\x02\x02=?\v\x02\x02\x02>;\x03\x02\x02\x02><\x03\x02\x02\x02" +
		"?B\x03\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02AC\x03\x02\x02\x02" +
		"B@\x03\x02\x02\x02CD\x07$\x02\x02D\x18\x03\x02\x02\x02EG\t\x03\x02\x02" +
		"FE\x03\x02\x02\x02GH\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02" +
		"I\x1A\x03\x02\x02\x02JL\t\x04\x02\x02KJ\x03\x02\x02\x02LM\x03\x02\x02" +
		"\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02N\x1C\x03\x02\x02\x02OQ\t\x05" +
		"\x02\x02PO\x03\x02\x02\x02QR\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02" +
		"\x02\x02ST\x03\x02\x02\x02TU\b\x0F\x02\x02U\x1E\x03\x02\x02\x02VX\t\x06" +
		"\x02\x02WV\x03\x02\x02\x02XY\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02" +
		"\x02\x02Z[\x03\x02\x02\x02[\\\b\x10\x02\x02\\ \x03\x02\x02\x02\t\x02>" +
		"@HMRY\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!fusionLexer.__ATN) {
			fusionLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(fusionLexer._serializedATN));
		}

		return fusionLexer.__ATN;
	}

}

