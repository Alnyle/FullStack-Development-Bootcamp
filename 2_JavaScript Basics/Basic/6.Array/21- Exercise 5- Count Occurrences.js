
const numbers = [1,2,1,1,3,4]

const count = countOccurrences(numbers, 1);

console.log(count);


function countOccurrences(array, searchElement) {
// first way
    // let counter = 0;
    // for (let number of array) 
    //     if (number === searchElement) counter++;   
    
    // return counter;

// second way

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence; 
    }, 0);
}



