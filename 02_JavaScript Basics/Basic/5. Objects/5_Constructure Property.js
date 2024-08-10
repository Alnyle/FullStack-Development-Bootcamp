
function CreateCircle(radius) {
    return {
        radius,
        draw() {
            console.log('hello');
        }
    };
}

console.log(CreateCircle(1))

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}


const circle = new Circle(1); 