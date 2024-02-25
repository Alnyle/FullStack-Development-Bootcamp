

const numbers = arrayFromRange(-10, 4);

console.log(numbers);

function arrayFromRange(min, max) {
    const n = [];
    for (let i = min;i <= max; i++) 
        n.push(i);
    
    return n;
}