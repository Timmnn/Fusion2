grammar fusion;

program: statement+ ;

statement
  : expression
  ;

expression
  : INT #Int
  | expression ('+' | '-') expression #AddSub
  ;



INT : [0-9]+ ;
NEWLINE : [\r\n]+ -> skip ;
WS : [ \t]+ -> skip ;
