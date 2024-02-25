/*Summary
Use parentNode.removeChild() : to remove a child node of a parent node.
The parentNode.removeChild() : throws an exception if the child node cannot
 be found in the parent node.
 */

let menu = document.getElementById('menu');

// remove a single element
menu.removeChild(menu.firstElementChild);


// Remove all child nodes using of an element
while(menu.firstChild) {
    menu.removeChild(menu.firstChild);
}