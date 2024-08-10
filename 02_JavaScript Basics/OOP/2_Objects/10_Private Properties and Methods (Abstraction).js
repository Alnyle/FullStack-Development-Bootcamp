

function Circle(radius) {
    this.radius = radius;
    let color = 'red';
    // we use let to define private variable and function
    let defaultLocation = {x:0, y: 0};

    let computeOptimumLocation = function(factor) {
        //....
    }

    this.draw = function() {
        this.computeOptimumLocation();
        console.log('draw');
    }
}


const circle = new Circle(1);
circle.radius