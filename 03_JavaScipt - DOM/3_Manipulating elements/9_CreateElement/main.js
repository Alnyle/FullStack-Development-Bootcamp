
// 1- Creating a new div 
// Create an element
let div = document.createElement('div');


// add id to div
div.id = 'content';
div.className = 'MyClass'


div.innerHTML = '<p>Hello this new div</p>';
document.body.appendChild(div);


// create new text and add it to div
let p = document.createTextNode('paragraph create through JS');
div.appendChild(p);


// create new element and add it to div
let h2 = document.createElement('h2');

// use textContent to add text to it
h2.textContent = 'this another header add it by JS';
div.appendChild(h2);

// 2) Creating new list items (li) 

let menu = document.getElementById('menu');


let li = document.createElement('li');
li.textContent = 'Product';
menu.appendChild(li);

li = document.createElement('li');
li.textContent = 'About Us';
menu.appendChild(li);

menu.style.fontSize = '4rem'


// 3) Creating a script element




function loadJS(url) {
    let script = document.createElement(script);
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
}

loadJS('/lib.js')