console.log("Operators and Equality");

// OPERATORS
/*
Arithmentic Operators
- '+', '-', '*', '/'

- Comparison Operator
- Logical Operator
- Assignment Operator
- Ternary/Conditional Operator
*/

// Arithmentic Operators
const a = 8;
const b = 5;
let result = 0;

// addition
result = a + b;
console.log("Addition: ",result);

// subtraction
result = a - b;
console.log("Subtraction: ",result);

// multiplication
result = a * b;
console.log("Multiplication: ",result);

// division
result = a / b;
console.log("Division: ",result);

// exponent
result = a ** b;
console.log("Exponent: ",result);

// modulo: it is the remainder
result = a % b;
console.log("Modulo: ",result);

// Take note that, result variable is the latest stored value of it.
// latest value of result = 3
result++;
console.log("Increment: ",result);

// decrement
result--;
console.log("Decrement: ",result);

// COMPARISON OPERATORS
/* 
Comparison operator returns either true/false values
- in return, we always get true or false values
*/

// greater than '>'
const x = 10;
const y = 20;
console.log("is x > y:",x > y);

// greater than or equal to '>='
console.log("is x >= y:",x >= y);

// less than '<'
console.log("is x < y:",x < y)

// less than equal to '<='
console.log("is x <= y:",x <= y);

// LOOSE EQUALITY OR DOUBLE EQUAL OR IS EQUAL '=='
/*
- It doesn't compare the Data types.
- should be used LESS
*/

/*
'=': we use one equal sign when we want to 
    assign a variable a value

'==': we use two equal signs when we want to check
    if the value is equal

'===': we use this when we want to make sure the 
    value of variables are really equal.
*/
console.log("is x == y:",x == y);

// NOT EQUAL '!='
console.log("is x != y:",a != b);

// STRICT EQUALITY '==='
console.log("is x === y:",a === b);

// STRICT INEQUALITY '!=='
console.log("is x !==    y:",a !== b);

/*
When to use Loose Equality & Strict Equality ????
*/
//example: in numbers
console.log('loose and strict equality in numbers:\n',
'5 == "5":',5 == "5",
"\n",'3 === "3":', 3 === "3",
"\n",'7 === 7:', 7 === 7);

// in strings
console.log('loose and strict equality in strings:\n',
'Hello == Hello:','Hello' == 'Hello',
"\n", 'Hello === Hello:', 'Hello' === 'Hello');

/* STRICT EQUALITY
- it is a preferred method to use in JS.
- its behaviour can be easily predicted, which 
    leads to less bugs and unexpected results.
- It compares VALUES and DATA TYPES, and then 
    return true only if both the values are equal
*/
// example: comparing in loose and strict equality
console.log('is Num 5 == string 5:',5 == '5',
'\nis Num 5 === String 5:', 5 === '5',
'\nis Num 5 === Num 5:', 5 === 5);

// SOME EXCEPTIONS to look out for
console.log("***** Some Exceptions in JS *****");

console.log("'' == '0':",'' == '0');
console.log("0 == '':",0 == '');
console.log("0 == '0':",0 == '0');

console.log("false == 'false':",false == 'false');
console.log("false == '0':",false == '0');

console.log("true == 1:",true == 1);
console.log("true === 1:",true === 1);

// LOGICAL OPERATORS
/* AND '&&'
AND: we use && symbol for AND operator
    - the AND operator check whether 
    ALL THE OPERANDS are TRUE, and if they are then
    it returns the value TRUE.
*/
console.log("AND Operator\ntrue && false:",
true && false);
console.log("true && true:",true && true);
console.log("true && false && true:",
true && false && true);

/* OR '||' pipe symbol or straight line
OR: we use || symbol for OR operator
- OR operator checks for ATLEAST ONE OPERAND is
    TRUE, if it is then it will return TRUE
*/
console.log("OR Operator\ntrue || false:",
true || false);

/* NOT '!'
NOT: we use ! symbol for NOT Operator
- NOT operator REVERSES THE BOOLEAN VALUE
*/
console.log("NOT Operator\n!true:",!true);

// Use cases of logical operators
const age = 16;
const isCool = true;

if(isCool && age > 18) {
    console.log('You may enter!');
} else {
    console.log('Underage not allowed!');
}

// continuation logical operator
/*
AND operator
- && operator works from LEFT to RIGHT
- It will always return the last TRUE value
- If it gets a FALSE value, it will return the 
    first false value
*/
console.log(1 && 'test' && 'truthy' && 1000);

/*
OR operator
- it also works from LEFT to RIGHT
- It will stop as soon as it gets a TRUE value
- it will return the first true value it gets.
- if all values in it are false, then it will 
    return the last false value.

*/
console.log('new' || 'test' || 'truthy' || 'Ops');

/*
NOT operator
- only accepts a single arguement
- return the inverse value
- ! returns negation value
- !! returns double negation value
*/
console.log("!0:",!0);
console.log("!!0:",!!0);

const value = true;

if(!!value) {
    console.log("It is TRUEEEEEE!!!!")
} else {
    console.log("mhmm its FALSE!")
}