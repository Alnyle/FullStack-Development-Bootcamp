
// arrays

const data: number[] = [1, 2, 3];
const data2: string[] = ['1', '2', '3'];
const data3: string[] | number[] = ["1", "2", "3"] // all element are number or strings
const data4: (string | number)[] = ['1', 2, '3'] // can have string and number in same time

let seatAllotment: 'aisle' | 'middle' | 'window';

seatAllotment = 'aisle'
seatAllotment = 'window'