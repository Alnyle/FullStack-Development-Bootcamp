
//1) Universal selector
// The universal selector is denoted by * that matches all elements of any type

let first = document.querySelector('*'); // first element in document
let all = document.querySelectorAll('*'); // All element in document

console.log(first)

// 2) Type selector

let Tag = document.querySelector('h2'); // select first h2 element
let allTag = document.querySelectorAll('h2'); // select All h2 element

// 3) Class Selector

let classSelector = document.querySelector('.section-a'); // first class with that Name
let AlllclassesSelector = document.querySelectorAll('.section-a'); // select all class with that name


