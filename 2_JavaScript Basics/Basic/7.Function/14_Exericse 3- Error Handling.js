
try {
    const numbers = [1,2,1,1,3,4]
    const count = countOccurrences(null, 1);
    console.log(count);

} catch(e) {
    console.log(e);
}
function countOccurrences(array, searchElement) {
    if (!Array.isArray(Array))
        throw new Error('It not a Array')
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence; 
    }, 0);
}



