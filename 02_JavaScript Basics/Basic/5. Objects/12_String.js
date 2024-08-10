
// String primitive 
const message = "hi my is Omar";

// String object
const another = new String('hi');


console.log(message.startsWith('hi')); // check if string start with specific string

console.log(message.endsWith('hi')); // check if string end with specific string

console.log(message.includes('is')); // check if string is part from another string

console.log(message.indexOf('my')); // return index of string

console.log(message.replace("Omar", "Ali"))

console.log(message.split(' '))



console.log(message.trim()) // the space at the first of string and end of string -> " hi Omar " -> "hi Omar"