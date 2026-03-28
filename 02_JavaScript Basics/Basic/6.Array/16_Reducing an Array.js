

const numbers = [1, 2, ,3, -1]

console.log()


// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);
const sum = numbers.reduce((accumulator, currentValue) =>
    accumulator + currentValue
);

console.log(sum);