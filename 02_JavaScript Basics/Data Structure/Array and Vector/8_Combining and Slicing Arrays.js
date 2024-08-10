

const first = [{ id: 3}];
const second = [4,5,6];
first[0].id = 10


const combine = first.concat(second);

console.log(combine);

const slice = combine.slice(0, 3);

console.log(slice);