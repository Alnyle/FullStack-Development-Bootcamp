
// The Rest Operator ...name
function sum(discount ,...prices) {
    const total =  prices.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
    }, 0);

    return total * (1 - discount);
     
}

// function store arguments as Array in javascript

console.log(sum(0.1 , 20, 30))