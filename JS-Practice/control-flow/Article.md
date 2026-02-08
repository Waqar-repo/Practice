Control Flow
Control flow allows us to decide how and when certain parts of our code should run. Instead of executing everything at once, we can control the program’s behavior based on conditions.
If / Else
The if...else statement is commonly used to run specific code depending on whether a condition is true or false.
If the condition is true, one block of code runs.
If the condition is false, null, or undefined, another block can run.
Switch
The switch statement is useful when we need to compare one value against multiple possible cases. It makes the code cleaner than writing many if...else if statements.
Truthy and Falsy Values
In JavaScript, some values are considered falsy, meaning they behave like false in conditions. Examples include:
0
-0
null
undefined
NaN
"" (empty string)
false
Everything else is generally considered truthy, such as:
{} (empty object)
[] (empty array)
"0" (string zero)
Non-empty strings
Non-zero numbers


Ternary Operator
The ternary operator is a shorter way to write an if...else statement in one line.
It checks a condition and returns one value if true, and another if false.
Nullish Coalescing Operator (??)
The nullish coalescing operator is used only for null and undefined.
If a value is null or undefined, it allows us to provide a default value.
It is useful when we want to assign a fallback value without treating 0 or "" as false.


