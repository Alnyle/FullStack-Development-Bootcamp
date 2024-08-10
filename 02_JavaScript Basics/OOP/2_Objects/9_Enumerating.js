

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}


const circle = new Circle(3);

for (let key in circle) {
    if (typeof (key) !== 'function')
        console.log(key, circle[key]);
}


// print object key instead of the values
const keys = Object.keys(circle)
    console.log(circle)

// to check if a specific property in the object     
if ('radius' in circle)
    console.log('circle has a radius')