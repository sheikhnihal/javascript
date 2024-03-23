console.log("Tricky Parts");

// SCOPE
/*
what is it? ,why do we need it?

- Scope simply allows us to know
where we have access to our variables
- It shows us the accessibility
of the variables, functions and objects
in some particular part of the code.

why to have limited visibility of the variables?
- provides with some level of security.
- helps to improve efficiency
- check bugs and reduce them
- also solves the problem of naming variables.

Types of Scope:
- Global Scope
- Local Scope/ Function Scope
- Block Scope (only with let and const var)


- Variables defined inside a function scope
are in a Local Scope
- Variables defined outside a function scope
are in a Global Scope

Each function when invoked creates a new scope
*/
/* examples: Global Scope
- when you start writing in an JS doc, you
are immediately into the Global scope.
for example: below variable 'name' is
in the global scope.

- The varibale below, can be accessed by any
other scope by function or block of code.
*/
console.log("Global Scope:");
const name = 'Nihal';

const logName = () => {
    console.log(name);
}
logName();

// Advantages of using Global Scope.
/*
- you can access the global variable from 
all the functions or modules in the programm.
- Usually used for storing constants, as it 
help with consistency and readability.
- Global variable is usefull when multiple
function are acccessing the same data.
*/

// Disadvantages of using Global Scope.
/*
-  if we declare to many variables in the 
global scope, they remain in the memory till
the program execution is completed. This can 
cause the out of memory issues.
- Not a good practise to have everything
in the global scope, because it keeps running
till the prohram is over.
- Data can be modified by any function.Any 
statement written in the program can change 
the value of a global variable.
*/

/* Local Scope.
- variables defined inside a function are in
the local scope.
*/
// example:
// Global Scope:
const age = 18;

// Local Scope / Function Scope:
console.log("Local Scope:");

const someFunction = () => {
    // Local Scope #01
    // this space is considered as Local Scope.
    const myAge = 24;
    console.log("Local Space 01: ",myAge);
    
    // Local Scope inside a Local Scope
    const anotherFuntion = () => {
        // Local Scope #02
        // this local scope is inside of another
        // local scope.
        const newAge = 30;
        console.log("Local Space 02: ",newAge);
    }
    anotherFuntion();
}

someFunction();

// Advantages of using Local Variables:
/*
- The use of local variables offers a 
gurarantee that the values of variable will 
remain intact while the task is running.
- You can give the local variables same name
in different functions, because they are only
recognized by the functions that they are
declared in.
- Local variables are deleted as soon as any
function is over and release the memory space
which it occupies.
*/
const example = () => {
    const name = 'Nihal';
    console.log(name); 
}

const newExample = () => {
    const name = 'Robert';
    console.log(name);
}
console.log("Advantage of Local varaible:")
example();
newExample();

// Disadvantages of using Local Variables:
/*
- scopes are limited to the function in 
which they are declared in.
*/

/* Block Scope
- behaves similarly to the local scope
- only for let and const variables
- can declare varibale using var even outside.
*/
// example:
if(true) {
    var myName = 'Itto';
    
    // console.log(name);
}

console.log(myName);


// HOISTING
/*
- Hoisting is a JavaScript mechanism where
variables and function declarations are moved
to the top of their scope before code execution.
- No matter where functions and variables are
declared, they are moved to the top of their
scope, regardless of whether their scope is
global or local.
*/
// example: 01
console.log('Hoisting example 01');

console.log(hoist);
var hoist = "This is Hoisting";
// causes error as vaiable is declared below,
// it basically stops the error to show up 
// in the console, and makes the 'var hoist'
// variable go up when executing the code.

// example: 02
hoisting();

function hoisting() {
    var msg = 'Hoisting example 02';

    console.log(msg);
}

/*
- Hoisting happens with vaiables and
function declaration.
- They get hoisted to the top.
- Hoisting doesn't work with const and let
variable type ot function.
- it will throw an "Uncaught" error.
*/

// CLOSURES
/*
- A closure gives you access to the outer 
function scope from an inner function.
- In JS, closures are created everytime a 
function is created at function creation time.
*/
// example: Closures
const outer = () => {
    const outerVar = 'Hello!!!!!';

    const inner = () => {
        const innerVar = 'Hii!';

        console.log(outerVar, innerVar);
    }

    return inner;
}

const innerFn = outer();

innerFn();

// example 02
const init = () => {
    const hobby = 'coding'; // this is a local var

    const displayHobby = () => { // this is a inner function, or the closure
        console.log(hobby); // we used the var created in the parent func
    }

    return displayHobby;
}

const myFunc = init();
myFunc();