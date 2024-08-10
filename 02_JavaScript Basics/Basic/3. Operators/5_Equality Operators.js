let x = 1;
// Strict Equality (Type + value) -> in another word compare (type + value)
console.log(x === 1);
console.log('1' === 1);

/* lose Equality -> doesn't care about the types matching, if the types don't match,it will convert the type of 
what we have on the right ot match what we have on the left side. And then it will only check if the values are
equals   */
console.log(x == 1); 