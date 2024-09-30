grammar fusion;

program
  : statement+ 
  ;

statement
  : returnStatement 
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
  ;

functionCall
  : ID '(' argList? ')'
  ;

block
  : '{' statement* '}' ;



funcDef
  : ID '(' funcDefArgList ')' ID block;


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
