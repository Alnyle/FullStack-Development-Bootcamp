
const _radius = new WeakMap();
class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log(_radius.get(this))
    }
}

const c = new Circle(1);
