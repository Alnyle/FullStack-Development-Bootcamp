

const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

const course = courses.find(function(course) {
    return course.name === 'a';
});
const ind = courses.findIndex(function(ind) {
    return ind.name === 'a';
});

console.log(course)
console.log(ind)


