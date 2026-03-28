

let input = document.getElementById('username');
console.log(input.type);

// Attribute methods
// To access both standard and non-standard attributes, you use the following methods:

// get attributes of element (input) and loop over them
for (let attr of input.attributes) {
    console.log(`${attr.name} = ${attr.value}`)
}


//element.setAttribute(name, value) – set the value for the attribute

// attribute -> property: ok because (you can treat attribute as property)
input.setAttribute('tabindex', 3); // if does not exist great new attribute or wise update it
console.log(`${input.getAttribute('tabindex')}`)


input.setAttribute('value', 'guest');
console.log(input.value);


// property -> attribute: does change (because you treat property as attribute)
input.value = 'admin';
console.log(input.getAttribute('value'))

// The value of an attribute is always a string. However, when the attribute is converted to the property of a
//  DOM object, the property value can be a string, a boolean, an object, etc.
let checkbox = document.querySelector('#chkAccept');
console.log(checkbox.checked); // true



let password = document.getElementById('password');

let styleAttr = password.getAttribute('style');
console.log(styleAttr);


console.dir(password.style);
