grammar fusion;

program
  : statement+ 
  ;






statement
  : returnStatement
  | importStat
  | ifStatement
  | whileLoop
  | varDecl
  | assign
  | funcDef
  | expression
  ;

expression
  : NUMBER                               #Num
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



importStat:
  'import' STR_LIT;


funcDef
  : ID '(' funcDefArgList ')' ID block;


ifStatement
  : 'if' expression block;


whileLoop
  : 'while' expression block;


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
  | '\'' (~["\\] | '\\' .)* '\''
  ;

ID
  :  [a-zA-Z_] [a-zA-Z_0-9]*
  ;


NUMBER
  : [0-9]+ ('.' [0-9]+)?
  ;

NEWLINE
  : [\r\n]+ -> skip
  ;

WS
  : [ \t]+ -> skip
  ;
