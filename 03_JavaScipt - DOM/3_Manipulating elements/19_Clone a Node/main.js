//cloneNode : get copy of node => originalNode.cloneNode(booleanValue) =>
// true then the original node and all of its descendants are cloned.
// If the deep is false, only the original node will be cloned. All the node’s descendants will not be cloned.

// there is two type of clone 1-deep 2-shallow

// Usage notes
// Besides the DOM structure, the cloneNode() copies all attributes and inline listeners of the original node.
// However, it doesn’t copy the event listeners added via addEventListener()
// or assignment to element’s properties such as originalNode.onclick = eventHandler().

// get the element by id
let menu = document.getElementById('menu');

let CloneMenu = menu.cloneNode(true);

CloneMenu.id = menu.id;

document.body.appendChild(CloneMenu);