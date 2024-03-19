// Single Line comment
// Types of variables
var variableOne = 'Variables and data types';
let variableTwo = 'New way of declaring variables';
const variableThree = 'Another way of declaring variables';

/*
This is a multi-line comment
displaying all types of variables in the console
*/
console.log(variableOne);
console.log(variableTwo);
console.log(variableThree);

/*
VARIABLE NAMING RULES
1. The name of the variable should be unique
2. The name of the variable should not be 
    any reserved keyword.
3. The name of the variable can start with 
    - underscore('_'),
    - dollar('$'),
    - Any alphabet.
*/

// let variable type can be re-used 
variableTwo = 'Hello';
console.log(variableTwo);


// Primitive Data types
/* 
can contain only single values at a time.
*/

// STRINGS
/*
Three types of Strings:
- '' single quotes
- "" double quotes
- `` backticks
*/

const singleQuote = 'Single Quote!';
console.log(singleQuote);

const doubleQuote = "Double Quote!!";
console.log(doubleQuote);

const backticks1 = `Backticks!!!`;

/*
`` Backticks are a complex strings.
Bacticks provide extended functionality.

They allow us to embed varaiables and expressions
into a string by wrapping them into a 
${...} construct.
*/

/*
When to use the Single and Double quotes?
- whenever you need t store some static value like
    a name, address, etc. use Single or Double quotes.

When to use Backticks?
- whenver you have to use a dynamic value like the
    addition of two numbers like below, use backticks.
*/
const name = 'Nihal';
const backticks = `Hello ${name}, welcome!!! `;
console.log(backticks);

const additionLogic = `2 + 2, ${2+2}`
console.log(additionLogic);

// to check the type of variable
const num = 10;
console.log(typeof num);
console.log(typeof backticks);


// NUMBERS
/*
- In javascript, you don't need to specifiy the numbers
this behaviour is called Untyped
- In JavaScript, whether the number is Integer or
Decimal is taking care by the run time env.
*/

const intNum = 5;
const decimalNum = 0.66;

console.log(typeof intNum, intNum);
console.log(typeof decimalNum, decimalNum);

//Operations in Numbers
const firstNum = 20;
const secondNum = 6;
const resultAdd = firstNum + secondNum;
const resultSub = firstNum - secondNum;
const resultMul = firstNum * secondNum;
const resultDiv = firstNum / secondNum;

console.log(resultAdd);
console.log(resultSub);
console.log(resultMul);
console.log(resultDiv);

// NaN: Not a Number
/*
when you do operation, mainly: '-', '*', '/'  
on String with number you get a NaN error.
- It is a computational error
- It is a result of incorrect or an undefined
mathematical operation
- NaN is actually technically a numeric data type,
whose value cannot be represented using actual numbers.
*/
const stringEx = "Hii";
const resultNan = firstNum - stringEx;
console.log(resultNan, 'this is of type:' + typeof resultNan,'NaN: Not a Number');

// BOOLEANS
/*
- Booleans represent a logical entity
- can have only two values
    - true
    - false
- This data type is used to store only 
    - yes = true, correct, 1
    - no = false, incorrect, 0
*/
const isCool = true;
console.log(typeof isCool, isCool);

// example with loop:
if(isCool) {
    // prints this when the condition is true
    console.log("Hey Nihal, you're cooool!");
} else {
    // prints this when the condition is false
    console.log('hiii');
}

// example with condition:
const age = 24;
console.log("Age is greater than 20:", age > 20);

// NULL
/*
- The Null type has only one value - 'null'
- its a special value, which represents 
    - nothing
    - empty
    - unknown value
- null is an assigned value
*/
let c_age = null;
console.log(typeof c_age, c_age);

// UNDEFINED
/*
- Undefined means that the value is not assigned.
- If a variable is declared but it has no value,
then it is said to be undefined by default.
- It is possible to assign an undeined value to a
variable
- variable is declared in this, but not assigned 
a value
*/
let a;
console.log("This variable is:",a);

/* When to use NULL and UNDEFINED ????
- we use NULL to assign empty or unknown
value to a variable

- we use UNDEFINED to check the variable value is
assigned or not
*/

// Complex Data Type

// OBJECTS
/*
- Most IMPORTANT Data Type
- forms the building block of Modern JS
- Object type is special
- Objects are used to store Collection of data
and more complex entities
- Objects in their simplest form are used to
store grouped variables.
*/
const person = {
    name: 'Nihal', 
//make sure to use ':' here instead of the 
//traditional '=' signs
    age: 24,
}
// this returns all the values in the object
console.log(person);
console.log(typeof person);

// to return only the specific value, use the
// dot notation.
console.log(person.name);
console.log(typeof person.name);

/* ARRAYS
Other kinds of Objects in JS
- Arrays: to store ordered data collection
*/
const arr = [1, 2, 3, 4, 5]
console.log("This is an example of Array\n", arr)
console.log("Array is of type:", typeof arr);

// Date
const date = new Date();
console.log("Date is type of an:",typeof date,"\n",date);

/*
At the end you have to remember that JavaScript is
Dynamically typed language.
*/