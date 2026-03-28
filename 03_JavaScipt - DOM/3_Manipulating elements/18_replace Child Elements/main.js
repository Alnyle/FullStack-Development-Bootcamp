
// get the element by id
let menu = document.getElementById('menu');


// create new node li
let li = document.createElement('li');
li.textContent = 'Home';

// replace the first list item
menu.replaceChild(li, menu.firstElementChild);
