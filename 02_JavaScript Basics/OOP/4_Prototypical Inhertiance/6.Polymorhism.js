

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



extend(Circle, Shape);

Circle.prototype.duplicate = function() {
    console.log('duplicate Circle');
}


function Square() {

}

extend(Square, Shape);

Square.prototype.duplicate = function() {
    console.log('duplicate Square');
}

const Shapes = [
    new Circle,
    new Square
]
for (let key of Shapes)
    console.log(key.duplicate())