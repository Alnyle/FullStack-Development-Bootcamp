
 // when you make variable = object => that variable store the address of memory location in the memory
 // while object in somewhere in memory
let x = { value: 20 };
let y = x; // here we copy the address or the reference from x to y

// primitive => string - number - boolean - null - undefined - symbol
// Object => Function - Array - Object


// Primitive are copied by their value
// Object are copied by their reference 

x.value = 10;

console.log(x)
console.log(y)