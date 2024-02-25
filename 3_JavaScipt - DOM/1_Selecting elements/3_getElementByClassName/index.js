

let menu = document.getElementById('menu');
let items = document.getElementsByClassName('item');

let data = [].map.call(items, item => item.textContent);

console.log(data)


let secondaries = document.getElementsByClassName('secondary');

let texts = [].map.call(secondaries, secondary => secondary.textContent);

// Automatic replacing of variables with real values is called string interpolation.
console.log(`secondaries text: ${texts}`);


