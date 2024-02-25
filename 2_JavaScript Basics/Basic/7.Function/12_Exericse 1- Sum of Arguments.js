

function sum(...numbers) {
    return numbers.reduce((a, b) => {
        if (Array.isArray(b)) 
           return a += b.reduce((x, y) => x+y);
        
        return a+b;
    });
}

console.log(sum(1,9,3, [1,2,3,4]))