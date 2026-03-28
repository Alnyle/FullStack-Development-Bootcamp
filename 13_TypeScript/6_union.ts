
// union : max of two or more types

let score: number | string = 33;

score = 2;
score = "21";

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let ali: User | Admin = { name: "Ali", id: 42};

ali = { username: 'bc', id: 42 };


// functions 

// function getDBId(id: number | string) {
//     // make some API calls
//     console.log(`DB id is: ${id}`);
// }

// getDBId(2)
// getDBId("32")

function getDBId(id: number | string) {

    if (typeof id === "string") {
        id.toLowerCase();
    } else if (typeof id === 'number') {
        id = id + 2;
    }

    console.log(typeof(id));

    // make some API calls
    console.log(`DB id is: ${id}`);
}

getDBId(2);



