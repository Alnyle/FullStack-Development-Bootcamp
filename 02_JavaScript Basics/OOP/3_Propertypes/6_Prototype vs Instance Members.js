 
// we have tow type of properties and methods in javaScript

function Circle(radius) {
    // 1-  Instance member
    this.radius = radius;

    this.move = function() {
        this.draw()
        console.log('move');
    }
};

// we put function called draw in the parent object of all objects
// 2- Prototype member
Circle.prototype.draw = function() {
    console.log('draw');
}

const c1 = new Circle(4)
const c2 = new Circle(4)

// we can also Overwrite Function 

Circle.prototype.toString = function() {
    return 'Circle with radius' + this.radius;
}