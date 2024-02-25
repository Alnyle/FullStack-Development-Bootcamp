
let note = document.getElementById('note');


// to show or change text content of element you can use 
// Use the textContent: property to return the concatenation of the textContent of every child node. You can use it to set a text for a node.
// The innerText: returns the human-readable text that takes CSS into account.

// 1-innerText:  Since  the innerText property uses the up-to-date CSS to compute the text,
// accessing it will trigger a reflow, which is computationally expensive.
console.log(note.innerText);


//2-textContent

note.textContent = 'Changed the div text content'