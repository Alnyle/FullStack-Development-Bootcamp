

const circle = {
    radius: 3,

    get getArea() {
        return Math.PI * this.radius * this.radius;
    }
}


console.log(circle.getArea)