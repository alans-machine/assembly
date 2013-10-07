assembly
========

Assembly language parser for the Turing machine

```peg
program = definitions:definition* statements:statement*

definition = 'def' space+ identifier newline statements:statement+ 'end' newline

identifier = characters:character+

character = [a-zA-Z0-9_]

statement = current:state ',' read:symbol ',' next:state ',' write:symbol ',' move:direction ';' newline?

state = 's' digits:digit+

digit = [0-9]

symbol = [a-zA-Z0-9_]

direction = 'L' / 'R'

space = ' '

newline = '\n'
```
