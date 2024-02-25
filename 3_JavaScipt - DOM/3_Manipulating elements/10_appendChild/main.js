

let menu = document.getElementById('menu');
let anotherMenu = document.getElementById('another-menu');
function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}



menu.appendChild(createMenuItem('Home'));
menu.appendChild(createMenuItem('Services'));
menu.appendChild(createMenuItem('About Us'));

anotherMenu.appendChild(menu.firstElementChild);
