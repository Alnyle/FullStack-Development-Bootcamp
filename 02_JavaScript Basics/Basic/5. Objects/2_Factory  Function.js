// Factory Function
// factory functions simply creates an object and returns it
// Use Camel Notation: oneTwoThree to name factor functions
function CreateCircle(radius) {
    return {
        radius,
        draw() {
            console.log('hello');
        }
    };
}


console.log(CreateCircle(1))