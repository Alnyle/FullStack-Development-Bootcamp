


// Factory Function
function showaddress(street,city,zipCode) {
    return {
        street,
        city,
        zipCode,
    };
}


// Constructor Function
function showaddress(street,city,zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}