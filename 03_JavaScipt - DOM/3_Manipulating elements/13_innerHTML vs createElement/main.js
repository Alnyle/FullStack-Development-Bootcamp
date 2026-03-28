

let div = document.querySelector('.container');

let p = document.createElement('p');

p.textContent = 'JS Dom';
div.appendChild(p);

// or you can use innerHTML

div.innerHTML += '<p>Hello man </p>'

//However, using the innerHTML causes the web browsers to reparse and recreate
// all DOM nodes inside the div element. Therefore,
// it is less efficient than creating a new element and appending to the div. In other words,
// creating a new element and appending it to the DOM tree provides 
// better performance than the innerHTML.

let fragment = document.createDocumentFragment();

for (let i = 1; i <= 1000; i++) {

    let p = document.createElement('p');
    p.textContent = `paragraph number ${i}`;

    fragment.appendChild(p);
}

div.appendChild(fragment);