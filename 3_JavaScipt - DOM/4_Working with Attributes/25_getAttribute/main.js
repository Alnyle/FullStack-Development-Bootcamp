// Summary
// Get the value of an attribute of a specified element by calling the getAttribute() method on the element.
// The getAttribute() returns null if the attribute does not exist.

let link = document.getElementById('youtube');

// if (btnSend) {: This is an if statement that checks whether the 
// variable btnSend is truthy. In JavaScript, 
// if getElementById successfully finds an element with the specified id,
//  it returns a reference to that element; otherwise, it returns null. Therefore,
//  this if statement checks if btnSend is not null or undefined 
//  (i.e., it checks if the element with the id 'btnSend' exists).

// check if the element is exist or not (if is does not exist link value is null)
if (link) {

    // get the attribute value;
    let target = link.getAttribute('href');
    console.log(target);
    link.setAttribute('href', 'https://www.javascripttutorial.net/javascript-dom/html-attributes-dom-object-properties/')
}


if (link) {

    let title = link.getAttribute('title');
    console.log(title); // print null -> because attribute does not exist
}