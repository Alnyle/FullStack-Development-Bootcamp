

const circle = {
    radius: 1,
    draw() {
        console.log("draw");
    }
};

for (let key in circle) // the normal way
    console.log(key, circle[key]);


console.log("string ::")
for (let key of Object.keys(circle)) // print object items as strings
    console.log(key);


console.log("array")
for (let entry of Object.entries(circle)) // print object items as arrays
    console.log(entry);

if ('color' in circle) console.log('yes') // to check is the property or an object exist in object