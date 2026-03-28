

let app = document.getElementById('app');


let langs = ['TypeScript', 'C++', 'Kotlin']
// 1) Using the append() method to append an element at the beginning

let nodes = langs.map(langs => {
    let li = document.createElement('li');
    li.innerText = langs;
    return li;
})

let fragment = new DocumentFragment();
// let nodes = langs.map(langs => {
//     let li = document.createElement('li');
//     li.innerText = langs;
//     fragment.append(li);
// })


app.prepend(...nodes)

// 2) Using the append() method to append text to an element at beginning

let txt = document.getElementById('txt')

txt.prepend('This appended using append() method');
