

let person = { name: 'Ali' };

Object.defineProperty(person, 'name', {
    writable:false,
    enumerable: false,
});


person.name = 'John';

for (let key in person)
    console.log(key)

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

console.log(descriptor);