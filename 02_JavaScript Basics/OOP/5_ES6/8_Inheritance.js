
class shape {

    constructor(color) {
        this.color = color;
    }

    move() {
        console.log('move');
    }
}

class Circle extends shape {

    constructor(color, radius) {
        super(color, radius);
        this.radius = radius;
    }

    draw() {
        console.log('draw');
    }
}

const c = new Circle('Blue', 3);

c.move()