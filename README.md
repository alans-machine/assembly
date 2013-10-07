assembly
========

Assembly language parser for the Turing machine

```peg
program = statements:statement*

statement = current:state ',' read:symbol ',' next:state ',' write:symbol ',' move:direction ';' newline?

state = 's' digits:digit+

digit = [0-9]

symbol = [a-zA-Z0-9_]

direction = 'L' / 'R'

newline = '\n'
```
