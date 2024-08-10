const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

// const course = courses.find(function(course) {
//     return course.name === 'a';
// });
// another way to do it

const course = courses.find(course => course.name === 'a');
const course1 = courses.find((course1) => course.name === 'a'); // if you multiple permeters in your function


console.log(course)