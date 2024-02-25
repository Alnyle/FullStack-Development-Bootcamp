const array = [1,2,3,4,'',0,null,NaN];

console.log(countTruthy(array));


function countTruthy(a) {
    counter = 0;
    for (let i = 0;i < a.length;i++) {
        if (a[i])
            counter++;
    }
    return counter;
}


