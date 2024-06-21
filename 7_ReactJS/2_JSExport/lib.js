
// 1-  The export keyword exports values from a module 
// so that you can use them in other modules. There are two types of exports:

let count = 1;

// combine declaration and export in a single statement
let name = "Ahmed"
// export let name = "Ahmed"

// export a const 
const MAX = 100;
// export const MAX = 100;

// export { count }

// a better way
export { name, MAX, count}


// 2 - default export 
// When using default exports, we can choose any name for the variable we import into

let message2 = 'Hello';

/* export normally */ 
export default message2



/* export without using curly braces */
// export default let speed = 200;


/* export a function as default */ 
// export default function increase() {

// }


