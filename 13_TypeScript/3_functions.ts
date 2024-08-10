

function addTwo(num: number): number {
    return num + 2;
}


let myValue = addTwo(5);


function getUpper(val: string) {
    return val.toUpperCase()
}

getUpper('Kalid')

function SignUpUser(name: string, email: string, isPaid: boolean) {

}

// default value function parameter
let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

loginUser('ds', "dsa")


function getValue(myVal: number): boolean | string  {
    if (myVal > 5) {
        return true;
    } else {
        return "200 OK";
    }
}


 const getHello = (s: string): string => {
    return " "
 }


 const heros = ["thor", "Badman", "Ironman"];
// const heros = [1, 2, 3]

 heros.map((hero): string => {
    return `Hero is ${hero}`
 })


 function consoleError(errmsg: string): void {
    console.log(errmsg);
 }


 // ype is used to represent a value that never occurs. Because of this,
 // you cannot assign any value to a variable with a never type.

 // it's mean function throws and exception or terminate execution of the program
 function handleError(errmsg: string): never {
    throw new Error("invalid type")
 }