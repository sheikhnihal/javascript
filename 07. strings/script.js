console.log("Strings");

// STRINGS
/*
- to store text, we use Strings.
- it is a Primitive Data Type
*/
//example:
const single = 'Single Quote String';
const double = "Double Quote String";

const backtick = `${2+2} this is addition.`;


/* SINGLE vs DOUBLE vs BACKTICK
- Single and Double Quotes are same, they can be 
called Simple or Basic strings.
- they simply represent some static textual value.

- strings created with Backticks are dynamic,
- they provide extended functionality, they are
dynamic
- allow us to execute real JS logic inside them.
- we can span string accross multiple line using
backticks.
*/
console.log(single);
console.log(double);
console.log(backtick);

const row  = `
1
2
3
4
5
`

console.log(row);

// STRING LENGTH & OTHER PROPERTIES
/*
- to calc the length of the string, we use .length
<var_name>.length

- the .length is a property
*/
//example:
const name = 'Aether is from other world';
console.log(name.length);

const firstLetter = name[0];
const lastLetter = name[name.length -1];


console.log(firstLetter, lastLetter);

// STRING CASES
/*
UPPERCASE and lowercase letters

2 methods to change the cases
-> .toLowerCase();
-> .toUpperCase();

- the above mentioned are methods, because we are
calling a function on the string constructor.

- .toLowerCase method is immutable. which means
it doesn't change the original string, rather 
creates a new one and returns it.

*/
// example:
const mixedCaseString = "Welcome to Gulag!";
console.log("Original text: ",mixedCaseString)

const strLen = mixedCaseString.length;
const lowCase = mixedCaseString.toLowerCase();
const upCase = mixedCaseString.toUpperCase();

console.log("string length: ", strLen);
console.log("lowercase: ",lowCase);
console.log("UPPERCASE: ",upCase);


// SEARCHING FOR SUBSTRING WITHIN STRING

// indexOf method:
/*
- indexOf(): it looks for a substring starting
from a given position
*/
console.log("Searching for Substring in String");

// indexOf() method:
/* 
- this method might be useful if you want to find
an index of the Substring in a certain string.

- Returns the position of the first occurrence 
of a substring.

- @param searchString — The substring to search 
for in the string

- @param position — The index at which to begin
searching the String object. If omitted, 
search starts at the beginning of the string.

- '-1' is an error, which means the substring does
not exist in the given string.
*/
const searching = "Finding Nemo is Damn HARD. its HARD!";

// indexOf() method:
/**
searchs for the first occurence of the substring
*/
console.log("This is indexOf() method")
const firstIndex = searching.indexOf('HARD');
console.log(firstIndex);


// lastIndexOf() method:
/*
searchs for the last occurence of the substring.
*/
console.log("This is lastIndexOf() method")
const lastIndex = searching.lastIndexOf('HARD');
console.log(lastIndex);


// includes() method:
/*
this method simply returns a true or false value. 
a simple boolean value to check if the substring
exists and return.
*/
console.log("This is includes() method");

const exists = searching.includes('HARD');
console.log(exists);

// startsWith() method:
/*
to check whether the string starts with a certain
substring.
*/
console.log("This is startsWith() method");
console.log(searching.startsWith('Finding'));

//endsWith() methods:
/*
to check whether the string ends with a certain
substring.
*/
console.log("This is endsWith() method");
console.log(searching.endsWith('HARD!'));