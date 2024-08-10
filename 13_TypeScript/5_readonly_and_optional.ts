

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number // this is field is optional 
}

let user: User = {
    _id: "1234",
    name: "J",
    email: "j@gmail.com",
    isActive: true,
    credcardDetails: 21
}


// Intersection Types: allow you to create new type by combine two types or more
type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type credcardDetails = cardNumber & cardDate & {
    cvv: number
}



console.log(user.credcardDetails);