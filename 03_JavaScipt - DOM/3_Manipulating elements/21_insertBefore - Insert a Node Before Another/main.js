
let menu = document.getElementById('menu');
// create a node
let li = document.createElement('li');
li.innerText = 'Home';


// insert the node using insertBefore
menu.insertBefore(li, menu.firstElementChild);


function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling)
}

li = document.createElement('li');
li.textContent = 'Our Achievements'

insertAfter(li, menu.lastChild);



// function insertBefore(newNode, exsitingNode) 