
let currentNode = document.getElementById("menu");

/*
Summary
    The firstChild and lastChild return the first and last child of a node, which can be any node type including text node,
    comment node, and element node.
    The firstElementChild and lastElementChild return the first and last child Element node.
    The childNodes returns a live NodeList of all child nodes of any node type of a specified node.
    The children return all child Element nodes of a specified node.
*/

// let firstChild = currentNode.parentNode.firstChild.nodeName;

// store the text of first and last child
let childrenText = [];



// 1- firstChild : get the first Child
let firstChild = currentNode.firstChild.nodeName;
console.log(firstChild.nodeName); // print nodeName -> LS

// 2- LastChild: get last Child
let lastChild = currentNode.lastChild.nodeName;
console.log(lastChild); // print NodeName -> LS


// print the content of first node and last node
console.log(childrenText);


// 3- firstChild : get the first element Child - first child Element node
let firstElementChild = currentNode.firstElementChild;
console.log(firstChild.nodeName); 
childrenText.push(firstChild.textContent)

// 4- LastChild: get last element Child ->  last child Element node
let lastElementChild = currentNode.lastElementChild;
console.log(lastChild.nodeName); 
childrenText.push(lastChild.textContent);

// print the content of first node and last node
console.log(childrenText);





