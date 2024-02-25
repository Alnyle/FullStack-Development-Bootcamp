

const numbers = [1,-2,3];

// check all array elements based on your condition in your function -> return true or false
const allPositive = numbers.every(function(value) {
    return value >= 0;
});

console.log(allPositive);

// some: check if there at least an element match your condition -> return true or false
const somePositive = numbers.some(function(value) {
    return value >= 0;
});

console.log(somePositive);

