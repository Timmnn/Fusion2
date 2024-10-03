grammar fusion;

program
  : statement+ 
  ;

statement
  : returnStatement 
  | ifStatement
  | whileLoop
  | forLoop
  | varDecl
  | assign
  | funcDef
  | expression
  ;

expression
  : INT                               #Int
  | expression ('+' | '-') expression  #AddSub
  | functionCall                      #FuncCall  // Renamed label to avoid conflict
  | ID                                # Id
  | STR_LIT                           #StrLit
  | expression ('>' | '<') expression #NumComp  
  ;



functionCall
  : ID '(' argList? ')'
  ;

block
  : '{' statement* '}' ;



funcDef
  : ID '(' funcDefArgList ')' ID block;


ifStatement
  : 'if' expression block;


whileLoop
  : 'while' expression block;

forLoop
  : 'for' expression 'to' expression block ;

funcDefArgList 
  : funcDefArg (',' funcDefArg)* ;



funcDefArg
  : ID ':' ID ;


varDecl
  : ID ID '=' expression ;

assign
  : ID '=' expression ;



returnStatement
  : ret=RETURN expr=expression ;


argList
  : arg (',' arg)*
  ;

arg
  : expression
  ;
RETURN
  : 'return' ;

STR_LIT
  : '"' (~["\\] | '\\' .)* '"'
  ;

ID
  : [a-zA-Z]+
  ;

INT
  : [0-9]+
  ;

NEWLINE
  : [\r\n]+ -> skip
  ;

WS
  : [ \t]+ -> skip
  ;
