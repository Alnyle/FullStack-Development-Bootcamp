

const numbers = [1,2,-3,1];

const filitered =  numbers
    .filter(n => n >= 0)
    .map(n => ({value: n}))
    .filter(obj => obj.value > 1);

// const items =  filtered.map(n => '<li>' + n + '</li>');

// const kap = filtered.map(n => ({ value: n}))

// console.log(kap);

// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);

console.log(filitered)