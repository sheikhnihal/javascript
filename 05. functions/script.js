console.log("Functions");

// Functions
/*
- A JS Function is a block of code designeed to
    perform a particular task.
    - example: console.log() is function
    to print something on console.

Function Declaration
- creating a function declaration, means that 
    we are defining a function.
- Advantage of using function is that they have 
    access "this" keyword to refer to the current 
    object.

Function Call
- a function call means that we are calling or
    executing a function.

DECLARE a function BEFORE you CALL it.

SYNTAX of FUNCTION
- function is a reserved JS Keyword 
    for creating function.
- function_name cannot be a JS reserved keyword.
- Parameters: these are the values that we are
    going to send to our function when calling it.
- return is really imp. you need to have it in 
    every function. it specifies the value we 
    will get in return by function

```
function <function_name>(parameters) {
    return <return_value>;
}
```

- To retieve the value from function, we need to
    call the function.
- Calling the function actually perform the 
    specified actions with the indicated parameters.
- Assign the return value to a variable to 
    store the value.

```
<function_name>(arguements);
```

- Arguments are the values that we want to fill
    our parameters with
*/
// example
function exponent(number) {
    return number ** number;
}

const result = exponent(3);
console.log(`Exponent of number is: ${result}`);

/*
- The code of the Function is executed when the 
    function called, this is called INVOKING

Ways to define a Function is JS
- Function Declaration: it defines a named function
- Function Expression: it defines a name or 
    anonymous function, and an Anonymous Function is
    a function that has no name.
    we can set an Anonymous Function to a variable.
- Arrow Function: it is a shorter syntax for writing
    function expressions.
*/

/* FUNCTION EXPRESSION
- Syntax of Function Expression with variable
```
const <function_name> = function(parameters) {
    return <return_value>; //statement.
}
```
*/

/* ARROW FUNCTION
- Syntax of Arrow Function
```
const <function_name> = (parameters) => {
    return <return_value>; //statements
}
```
*/

// Way to invoke a Function.

function sayHi(name) {
    console.log(`Hii ${name}, nice to meet you!`);
}

sayHi('Nihal');

/*
- Every Function in JS returns undefined, unless
    otherwise specified.
- Imp thing to know about RETURN in function is
    that, it stops the function execution immediately.
- if there are multiple RETURN statements in a func,
    only the first one will be executed, and then
    it stops.
*/
function test() {
    console.log("Invoking Function here")
    return true;
    return false;
}

const value = test();

console.log("value is:", value)

// ARROW FUNCTIONS
/*
- these are the modern way to write function in JS
- Most concise way to write a function
- They do not create their own "this" value.
- "this" is a special JS reserved keyword that

- SYNTAX of Arrow function
```
const <function_name> = (parameters) => {
    return <return_value>; //statements
}
```
*/
// example: traditional way of writing func
// const square = (number) => {
//     return number * number;
// }

// another way to write arrow func
/*
- when you have only one parameter, you can omit 
    the parenthesis.
- when you have only one return statement, you 
    can omit the return keyword and the curly braces.
*/
const square = number => number * number;

const squared = square(5);

console.log("Square of the num is:", squared)

// PARAMETERS and ARGUMENTS
/*
PARAMETERS
- used when definign a function
- they are the names created in the function definition
- it is like a variable which is meaningful only inside
    of a function.
- it won't be accessible outside of the function

ARGUMENTS
- these are real values
- these are passed when making a function call
- it is a real JS value

If a parameter is not provided, it will always 
return as undefined.

You can set the Default Parameter, just provide a 
value in the (params_part) in the function.
and When you don't provide any value, it will be
set to the default params value.
*/
const sayHii = (name, age) => {
    console.log(`Hi ${name}, you are ${age} years old`);
}

sayHii('Nihal', 24);

const adds = (a, b = 1) => {
    return a + b;
}
const sums = adds(5);
console.log(sums);