// Creating a Set
const mySet = new Set();

// Adding values to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // This won't add a duplicate value

// Checking if a value exists in the Set
console.log(mySet.has(2)); // Prints true

// Removing a value from the Set
mySet.delete(2);

// Iterating over the Set
for (const value of mySet) {
  console.log(value);
}

// Getting the size (number of unique values) of the Set
console.log(mySet.size); // Prints 2

mySet.clear();