
/// for_in loop
// use to loop over object element 
const person = {
    name: 'Omar',
    age: 32,
    gender: 'male',
};

for (let key in person)
    console.log(key);


const color = ['red','blue','green']

for (let c in color)
    console.log(c, color[c]);