

function EvenOdd(number) {
    for (let x = 0;x <= number;x++) {



        const message = (x % 2 === 0) ? "Even" : "Odd";
        console.log(x, message)
    }
}
EvenOdd(10);

        // if (x % 2 === 0) console.log("Even:",x);
        // else console.log("Odd:",x);