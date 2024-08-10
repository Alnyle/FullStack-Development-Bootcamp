

function Shape(color) {
    this.color = color;
}

function Circle(radius, color) {
    this.radius = radius;
    Shape.call(this, color);
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

// Inheritance member from Shape Object in instead
Circle.prototype = Object.create(Shape.prototype); // add properties of another Object
// after every inheritance of object you have to make the object reference to original object constructor it's self 
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape()
const c = new Circle(3, 'red')
console.log(c)
