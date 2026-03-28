

// Street zipCode  city

function address(add) {
    return {
        street: "Mon",
        city: "Khartoum",
        zipCode: 142,
    };
}


console.log(address("ka"))



let add = {
    street: 'a',
    city: 'b',
    zipCode: 2,
};

function showAddress(address) {
    for (let key in address) 
        console.log(key, address[key])
}

showAddress(add)