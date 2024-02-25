
function Circle(radius) {
    this.radius = radius;
}

function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

// Inheritance member from Shape Object in instead
Circle.prototype = Object.create(Object.prototype) // ObjectBase
Circle.prototype = Object.create(Shape.prototype);


Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape()
const c = new Circle(3)

