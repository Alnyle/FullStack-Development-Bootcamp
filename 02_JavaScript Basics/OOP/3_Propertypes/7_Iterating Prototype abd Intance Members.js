 
// we have tow type of properties and methods in javaScript

function Circle(radius) {
    // 1-  Instance member
    this.radius = radius;

    this.move = function() {
        this.draw()
        console.log('move');
    }
};

const c1 = new Circle(3);

// we put function called draw in the parent object of all objects
// 2- Prototype member
Circle.prototype.draw = function() {
    console.log('draw');
};

// Return just instance members o object members
console.log(Object.keys(c1));

// Return all instance members(Object member) and Prototype members (all member (instance + prototype))
for (let key in c1) console.log(key);

// hasOwnProperty(): check if the member is object member => just work in console not
c1.hasOwnproperty('draw')