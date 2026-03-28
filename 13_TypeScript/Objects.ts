
const User = {
    name: "Ali",
    email: 'Ali@gmail.com',
    isActive: true,
}


function createUser({name: string, isPaid: boolean}) {
    return {}
}

let newUser = {name: "Ahmed", isPaid: true, email: 'Ali@gmail.com'}
createUser(newUser)
  
createUser({name: 'name', isPaid: true})

// return object with specific properties
function createCourse(): {name: string, price: number} {
    return {name: "DSA java", price: 122}
}
