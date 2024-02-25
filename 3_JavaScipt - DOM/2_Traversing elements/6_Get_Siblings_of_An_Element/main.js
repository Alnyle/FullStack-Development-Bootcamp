/* Summary
    The nextElementSibling: returns the next sibling of an element or null if the element is the last one in the list.
    The previousElementSibling: returns the previous sibling of an element or null if the element is the first one in the list.
    To get all siblings of an element, you can use a helper function that utilizes the nextElementSibling property.
 */


// get the all sibling
let sons = document.querySelectorAll('#menu > li');

// 1- nextElementSibling

// A- get the next Sibling using nextElementSibling

// The nextElementSibling returns null if the specified element is the last one in the list.
let currentNode = document.querySelector('.current');
let nextSibling = currentNode.nextElementSibling;
console.log( `Next Sibling is: ${nextSibling.textContent} \n `)


// B- you can use while loop with it
while(nextSibling) {
    console.log(`Next Sibling is: ${nextSibling.textContent}`);
    nextSibling = nextSibling.nextElementSibling;
}


console.log('\n')

// 2 - Get the previous siblings

currentNode = document.querySelector('.current');
previousSibling = currentNode.previousElementSibling;

console.log(previousSibling.textContent);




// let x = 0;
// sons.forEach((son) => {
//     son.innerHTML = `${x} -> ${son.textContent}`;
//     x++;
// })

// let data = [].map.call(sons, son => son.textContent)

// console.log(data)