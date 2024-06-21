

// explanation source:
// https://www.javascripttutorial.net/javascript-top-level-await/

import { users } from './user.mjs'


// use case of Top-level await use case
//1- Dynamic dependency pathing
// const words = await import(`/i18n/${navigator.language}`);

// 2-Dependency fallback
// if fail to import first dependency then import the second one
// let module;
// try {
//   module = await import('https://cdn1.com/module');
// } catch {
//   module = await import('https://cdn2.com/module');
// }


function render(users) {
    if (!users) {
        throw 'The user list is not available';
    }

    const list = users
        .map((user) => {
            return `<li>${user.name}(<a href="email:${user.email}">${user.email}</a>)</li>`;
        }).join('')

    return `<ol>${list}</ol>`
}

const container = document.querySelector('.container');
try {
    container.innerHTML = render(users);
}
catch(error) {
    console.log(error);
}

