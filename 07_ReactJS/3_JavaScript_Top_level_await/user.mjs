
let users;

// first way
// export default (async () => {
//     const url = 'https://jsonplaceholder.typicode.com/users';
//     const response = await fetch(url);
//     users = await response.json()
// })()


// second way : ES2022 introduced in this workaround the top-level await module to resolve this issue.
const url = 'https://jsonplaceholder.typicode.com/users';
const response = await fetch(url);
users = await response.json()



export { users }