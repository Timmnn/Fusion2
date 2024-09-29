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
	public static readonly RETURN = 9;
	public static readonly STR_LIT = 10;
	public static readonly ID = 11;
	public static readonly INT = 12;
	public static readonly NEWLINE = 13;
	public static readonly WS = 14;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "RETURN", 
		"STR_LIT", "ID", "INT", "NEWLINE", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'+'", "'-'", "'('", "')'", "'{'", "'}'", "','", "':'", "'return'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "RETURN", "STR_LIT", "ID", "INT", "NEWLINE", "WS",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x10Y\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t" +
		"\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\v\x07\v;\n\v\f\v\x0E\v>\v\v\x03\v\x03\v\x03\f\x06\fC\n\f\r\f\x0E\fD\x03" +
		"\r\x06\rH\n\r\r\r\x0E\rI\x03\x0E\x06\x0EM\n\x0E\r\x0E\x0E\x0EN\x03\x0E" +
		"\x03\x0E\x03\x0F\x06\x0FT\n\x0F\r\x0F\x0E\x0FU\x03\x0F\x03\x0F\x02\x02" +
		"\x02\x10\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02" +
		"\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02" +
		"\x0F\x1D\x02\x10\x03\x02\x07\x04\x02$$^^\x04\x02C\\c|\x03\x022;\x04\x02" +
		"\f\f\x0F\x0F\x04\x02\v\v\"\"\x02^\x02\x03\x03\x02\x02\x02\x02\x05\x03" +
		"\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02" +
		"\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02" +
		"\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02" +
		"\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02" +
		"\x02\x02\x03\x1F\x03\x02\x02\x02\x05!\x03\x02\x02\x02\x07#\x03\x02\x02" +
		"\x02\t%\x03\x02\x02\x02\v\'\x03\x02\x02\x02\r)\x03\x02\x02\x02\x0F+\x03" +
		"\x02\x02\x02\x11-\x03\x02\x02\x02\x13/\x03\x02\x02\x02\x156\x03\x02\x02" +
		"\x02\x17B\x03\x02\x02\x02\x19G\x03\x02\x02\x02\x1BL\x03\x02\x02\x02\x1D" +
		"S\x03\x02\x02\x02\x1F \x07-\x02\x02 \x04\x03\x02\x02\x02!\"\x07/\x02\x02" +
		"\"\x06\x03\x02\x02\x02#$\x07*\x02\x02$\b\x03\x02\x02\x02%&\x07+\x02\x02" +
		"&\n\x03\x02\x02\x02\'(\x07}\x02\x02(\f\x03\x02\x02\x02)*\x07\x7F\x02\x02" +
		"*\x0E\x03\x02\x02\x02+,\x07.\x02\x02,\x10\x03\x02\x02\x02-.\x07<\x02\x02" +
		".\x12\x03\x02\x02\x02/0\x07t\x02\x0201\x07g\x02\x0212\x07v\x02\x0223\x07" +
		"w\x02\x0234\x07t\x02\x0245\x07p\x02\x025\x14\x03\x02\x02\x026<\x07$\x02" +
		"\x027;\n\x02\x02\x0289\x07^\x02\x029;\v\x02\x02\x02:7\x03\x02\x02\x02" +
		":8\x03\x02\x02\x02;>\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02" +
		"=?\x03\x02\x02\x02><\x03\x02\x02\x02?@\x07$\x02\x02@\x16\x03\x02\x02\x02" +
		"AC\t\x03\x02\x02BA\x03\x02\x02\x02CD\x03\x02\x02\x02DB\x03\x02\x02\x02" +
		"DE\x03\x02\x02\x02E\x18\x03\x02\x02\x02FH\t\x04\x02\x02GF\x03\x02\x02" +
		"\x02HI\x03\x02\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02J\x1A\x03\x02" +
		"\x02\x02KM\t\x05\x02\x02LK\x03\x02\x02\x02MN\x03\x02\x02\x02NL\x03\x02" +
		"\x02\x02NO\x03\x02\x02\x02OP\x03\x02\x02\x02PQ\b\x0E\x02\x02Q\x1C\x03" +
		"\x02\x02\x02RT\t\x06\x02\x02SR\x03\x02\x02\x02TU\x03\x02\x02\x02US\x03" +
		"\x02\x02\x02UV\x03\x02\x02\x02VW\x03\x02\x02\x02WX\b\x0F\x02\x02X\x1E" +
		"\x03\x02\x02\x02\t\x02:<DINU\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!fusionLexer.__ATN) {
			fusionLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(fusionLexer._serializedATN));
		}

		return fusionLexer.__ATN;
	}

}

