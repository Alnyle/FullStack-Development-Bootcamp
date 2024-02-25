

const numbers = [1,2,3,4,5];

const ans =  includes(numbers,-2)

console.log(ans)

function includes(array, searchElement) {
    for (let number of array) {
        if (number === searchElement)
        return true;
    }

    return false;
}

