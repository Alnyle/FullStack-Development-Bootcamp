
// const user: (string | number)[] = [ 1,'hc', 2, 'aa']; 
let user: [string, number, boolean]

user = ["dax", 12, true]

// as variable
let rgb:[number, number, number] = [120, 80, 100];

// as type

type User = [number, string];

const newUser: User = [12, "emample@gmail.com"];

newUser[1] = 'dx.com'

newUser.push(true) // error

console.log(user);