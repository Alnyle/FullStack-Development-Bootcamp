

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}


const circle = new Circle(1);
circle.location = { x: 1 }; // Adding new property

// accessing object property using: 
// 1-  objectName.property
console.log(circle.radius)

// 2- objectName['string'] or objectName[string variable]  
// we use this kind when we want to access object properties Dynamically

const propertyName = 'location'
console.log(circle[propertyName])

delete circle.location // when we want delete property from an object