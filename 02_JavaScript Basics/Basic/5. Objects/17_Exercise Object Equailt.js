

let address1 = new Address('A','B',1)
let address2 = new Address('A','B',1)
let address3= address1; // pointing the same address in the memory 



function Address(street,city,zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1,address2) {
    for (let key in address1)
        if (address1[key] !== address2[key])
            return false;
    return true;
}
function areEqual(address1,address2) {
    return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode;
}




console.log(areEqual(address1,address2))

function areSame(address1,address2) {
     return address1 === address2;
}

console.log(areSame(address1,address2))
console.log(areSame(address1,address3))