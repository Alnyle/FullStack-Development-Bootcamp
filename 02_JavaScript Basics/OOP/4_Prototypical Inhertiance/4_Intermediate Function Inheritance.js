

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


function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}


Circle.prototype.draw = function() {
    console.log('draw');
}




extend(Circle, Shape); // using this function we make Circle object inheritance Shape Object properties

function Square(size) {
    this.size = size;
}

 // make Square Object Inheritance from Shape Object
extend(Square, Shape);

const s = new Shape()
const c = new Circle(3, 'red')
console.log(c)
