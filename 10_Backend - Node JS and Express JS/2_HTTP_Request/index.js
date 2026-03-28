import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts());
console.log(`Posts Length: ${getPostsLength()}`);

// import in common js
// const { generateRandomNumber, celsiusToFahrenheit } = require('./utils.js');


// console.log(`Random Number: ${generateRandomNumber()}`);
// console.log(`Celsius to fahrenheit: ${celsiusToFahrenheit(32)}`); 