
// Very Important 
// Use the insertAdjacentHTML() method to insert a text as Nodes into the DOM tree at a specified position.
// Always escape the user input text that you pass into the insertAdjacentHTML() method to avoid security risk

let list = document.getElementById('list');


// 'beforebegin': insert HTML before the element
list.insertAdjacentHTML('beforebegin','<h1>Tech Fans</h1>')


// 'Afterbegin' : insert HTML after the fist child of the element
list.insertAdjacentHTML('afterbegin','<li>HTML</li>')

// 'Afterbegin' : insert HTML after the last child of the element
list.insertAdjacentHTML('beforeend','<li>React</li>')


// 'afterend' : insert HTML after the element
list.insertAdjacentHTML('afterend', '<p>for frontend developer fans</p>')
