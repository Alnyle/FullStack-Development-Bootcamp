
let sons = document.querySelectorAll('#menu > li');

let x = 0;
sons.forEach((son) => {
    son.innerHTML = `${x} -> ${son.textContent}`;
    x++;
})

let data = [].map.call(sons, son => son.textContent)

console.log(data)