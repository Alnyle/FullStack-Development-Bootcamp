

function Circle(radius) {


    this.radius = radius;
    let defaultLocation = {x:0, y: 0};


    this.draw = function() {
        this.computeOptimumLocation();
        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location')
            defaultLocation = value;
        }
    })
}


const circle = new Circle(1);
circle.defaultLocation