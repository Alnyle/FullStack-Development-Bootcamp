
const numbers = [1,2,3,4]

const max = getMax([])

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;
    // let max = array[0];
    // for (let number of array) {
    //     if (max < number)
    //         max = number;
    // }

    return array.reduce((accumulator , current) => {
        return (accumulator < current) ? current : accumulator;

    }, array[0]);

    return max;

}