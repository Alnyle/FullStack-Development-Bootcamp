
const printVar = <T extends number>(val: T): T  => {
    return val;
}

let nums: number = printVar<number>(2);


const getMoreSearchProducts = <T>(products: T[]): T => {

    const index = 1;
    return products[1];
    // return 1 => error = the return value should be from the array
}