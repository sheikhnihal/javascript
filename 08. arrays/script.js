console.log('ARRAYS');

// INTRODUCTION
console.log('INTRODUCTION:');
/*
- this is how we declare Arrays in JS.
const <var_name> = [<element1>, <element2>];

- Arrays are ordered values, which are stored
    in a single variable.
- Arrays can store data of different types.
- Array elements are accessed by their index.
- Arrays elements starts from 0
- Arrays are of data type object.
- Always name your arrays in plural form.
- to retrieve a certain element from the array
we use the [] operator.
- retrieve example:
```
const <var_name> = [<element>,<element>,<element>];
console.log(<var_name>[index_of_element])
```

- to remove or change an element, we change it 
like we do with variables.

- to add an element to the array, we use same as 
changing, but instead of changing, we add a new
index by using the [] operator and assigning a
value to it.

-  to get the total count of elements in an array
we use the length property.

- to loop through an array, to get the elements
one by one, here we use the for loop.
*/
//example:
const months = ['January', 'February', 'March', 'April'];

console.log(months);

console.log(months[2]);

months[1] = 'Not Feb';
console.log(months);

months[4] = 'May';
console.log(months);

console.log(months.length);

// example: different data types in an single array
const values = [
    'Hello, world!', //string
    {name: 'Nihal'}, //object
    true, //boolean
    () => { //function

    }
];
console.log(values);

// using for loop to loop through an array
console.log('For Loop in an array:');

for (let i = 0; i < months.length; i++) {
    console.log(months[[i]]);
}

// ARRAY METHODS
console.log('ARRAY METHODS:');
/*
push() method:
- adds an element to the end of the array.
- format:
```
array_name.push(element);
```

- array.push returns the new length of the array.
- it changes the original array.
 */
//example:
console.log('Push Method:');

const names = ['Nihal', 'Aryan', 'Dhaval', 'Rehman'];

names.push('Omkar');
console.log(names);

/*
pop() method:
- removes/deletes the last element from the array.
- format:
```
array_name.pop();
```
- no need to provide an element to pop method.
- array.pop returns the removed element.
- it also changes the original array.
*/
//example:
const removedValue = names.pop();
console.log("Removed Element is:",removedValue);
console.log(names);

/*
shift() method:
- removes the first element from the array.
- then it moves the rest element backwords.
- format:
```
array_name.shift();
```
- no need to provide an element to shift method.
- array.shift returns the removed element.
- it changes the original array.
*/
//example:
const firstElement = names.shift();
console.log('Removed Element is:',firstElement);
console.log(names);


/*
unshift() method:
- adds an element to the start of the array.
- then it moves the rest element forwards.
- format:
```
array_name.unshift(element);
```

- need to provide an element to add in the array. 
- array.unshift returns the new length of the array.
- it changes the original array.
*/
//example:
names.unshift('Nihal');
console.log(names);

/*
splice() method:

- it adds and removes new values from any 
position of an array.

- this method allows you to splice values into the
new array.
- its first parameter, determines where the new
elements are placed
- the second parameter, determines how many after
that point should be removed before placement.
- and then all the parameters after are the 
values you want to push in.

- format:
```
array_name.splice(index_start_position, elements_to_delete_after_index, element1, element2, ...);
```

*/
// example:
names.splice(2, 2, 'Nitin', 'Nayan');
console.log(names);



/*
slice() method:

- it copies certain parts of an array into a new
array.

- this method allows you to slice the array.
- it doesn't change the original array.
- format:
```
array_name.slice(start_index, end_index);
```

- it returns the sliced array.
*/
// example:
const newNames = names.slice(0,2)
console.log(newNames);