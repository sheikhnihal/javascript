console.log("Logic and Control flow");

// we are going to write actual block 
// of code from now on

/* IF STATEMENT example
- if is a RESERVED JS KEYWORD
```
if (<condition 1>) {
    <block of code to be executed if 
    the condition 1 is true>
} else if (<condition 2>) {
    <block of code to execute if 
    the condition 2 is true>
} else <no need of condition here> {
    <block of code directly executes if
    conditions 1 & 2 are not met>
}
```
*/
const age = 16;;

if (age > 18) {
    console.log("Access Granted");
} else if (age === 18) {
    console.log("New Adult, Welcome!");
} else {
    console.log("FUCK OFF!!!")
}

// TRUTHY and FALSY
/* TRUTHY
- when we say a value is TRUTHY
    we don't just means thst the value is true,
    rather we mean value changes to true when
    evaluated in a Boolean Context

- there are only 6 FALSY values all the 
    other are TRUTHY values

- all FALSY values are as follows:
    - false
    - 0
    - '' <empty string>
    - null
    - undefined
    - NaN

TRUTHY values
- all the other values except the 6 FALSY values
- Empty Object {}
- Empty Array []
*/

// example
const cats = 10;

if (cats) {
    console.log(`You got ${cats} pussies.`);
} else {
    console.log("You got no pussy!");
}

// SWITCH STATEMENT
/*
- Switch statement is like 
    big brother of if statement 
- They are both extremely similar
-  Switch Statement should be used when 
    there are larger number of conditions.
- Switch statement is used to perform different
    operations based on different conditions
*/
/* SWITCH SATEMENT SYNTAX
- Switch statement takes in a VALUE, and then
    checks it on a bunch of CASES
```
switch (<value: most likely a variable>) {
    case '<value to be compared>':
        console.log() <return value here>
        break; <stop the loop with break>

    default: <if none other cases match this will be executed>
        console.log() <returns this when no valid input given>
}
```
*/
// example
const hero = 'Peacemaker';

switch (hero) {
    case 'Superman':
        console.log("The S stands for HOPE");
        break;

    case 'Batman':
        console.log("I bought the Bank");
        break;

    case 'Peacemaker':
        console.log("Do you really wanna make it");
        break;

    case 'Iron Man':
        console.log("Billionare, Philanthopist, Playboy");
        break;

    case 'Captain America':
        console.log("I can do this all day");
        break;

    case 'Hawkeye':
        console.log("You didn't see that one coming");
        break;

    default:
        console.log("No hero found!");
}

// same example above using if statement

if (hero === 'Superman') {
    console.log("The S stands for HOPE");
} else if (hero === 'Batman') {
    console.log("I bought the Bank");
} else if (hero === 'Iron Man') {
    console.log("Billionare, Philanthopist, Playboy");
} else if (hero === 'Hawkeye') {
    console.log("You didn't see that one coming");
} else if (hero === 'Captain America') {
    console.log("I can do this all day");
} else if (hero === 'Peacemaker') {
    console.log("Do you really wanna make it");
} else {
    console.log("No hero found!");
}


// TERNARY OPERATOR
/*
- Younger brother of if statement
- Should be used just for simple true or false check

SYNTAX of TERNARY OPERATOR
compare it with if statement syntax
```
if (condition) {
    if true
} else {
    if false
}
```

```
condition ? if true : if false
```
*/

const marks = 50;

if (marks > 50) {
    console.log("Passed")
} else {
    console.log("Failed");
}

marks >= 50 ? console.log("Passed") : console.log("Failed");

// WHILE LOOP
/*
- SYNTAX of WHILE LOOP
```
while(<condition>) {
    /// block of code to be executed
    condition increment or decrement;
}
```

- Generally in loops we use 'i' as a variable
*/
//example
console.log("While Loops Starts here:");
let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

/*
A single execution of the Loop body 
is called an ITERATION
*/

// FOR LOOP
/*
- More complex but most commonly used.
- For Loops are declared with three optional 
    expressions, separated by semi-colon.

- SYNTAX of FOR LOOP
```
for (<initialisation>; <condition>; <final expression>) {
    /// block of code to be executed.
}
```
INITIALISATION
- initialisation starts only one time before the
    loop starts.
- it is typically used to define and setup 
    the loop variable.
    
CONDITION
- the condition statement is evaluated at the 
    beginning of every loop iteration.
- it will continue to run the loop as long as
    it evaluates to true.
- when the condition evaluates to false, the loop
    will stop executing.

FINAL EXPRESSION
- executed at the end of every loop iteration.
- it is usually used to increment or decrement 
    the loop counter.
*/
// example
console.log("For Loop starts here:");
for(let i =0; i < 10; i++) {
    console.log(i);
}