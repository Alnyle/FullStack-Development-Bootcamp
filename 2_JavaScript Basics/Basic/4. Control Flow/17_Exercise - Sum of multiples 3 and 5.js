

console.log(limit(10))


function limit(n) {
    let sum = 0;
    
    for (let i = 0;i <= n;i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;
    

    return sum;
}