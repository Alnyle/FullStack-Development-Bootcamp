

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}

// const another = {};

// for (let key in circle)
//     another[key] = circle[key];
// another['radius'] = circle['radius']


// another way

// const another = object.assign({}, circle) // copy many ojbect in one object  

const another = { ...circle }

console.log(another)