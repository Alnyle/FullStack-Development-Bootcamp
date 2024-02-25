
const _radius = new WeakMap();
class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle with radius' +)
    }

}

const c = new Circle(1);
c.radius = -3;
console.log(c.radius)