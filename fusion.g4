grammar fusion;

program:   statement+ ;

statement
  :  expression
  ;

expression
  :  expression ('*'|'/') expression  #MultDiv
  |  expression ('+'|'-') expression  #AddSub
  |  INT  #Int
  ;



ID  :   [a-zA-Z]+ ;
INT :   [0-9]+ ;
NEWLINE : [\r\n]+ -> skip ;
WS  :   [ \t]+ -> skip ;
