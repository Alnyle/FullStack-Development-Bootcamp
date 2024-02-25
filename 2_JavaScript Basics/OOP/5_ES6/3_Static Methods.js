
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance Method
    draw() {
    }

    // Static Method => to make function only accessable through class it's self
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius); 
    }
}



const c = Circle.parse('{"radius": 1 }');
console.log(c) 