// Creating a Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set('name', 'John');
myMap.set('age', 30);

// Accessing values by key
console.log(myMap.get('name')); // Outputs: 'John'

// Checking if a key exists in the Map
console.log(myMap.has('name')); // Outputs: true

// Deleting a key-value pair
myMap.delete('age');

// Iterating over key-value pairs in the Map
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

// Getting the number of key-value pairs in the Map
console.log(myMap.size); // Outputs: 1


// Maps in JavaScript can use various data types as keys, including objects and functions,
//  whereas objects are limited to using strings and symbols as keys