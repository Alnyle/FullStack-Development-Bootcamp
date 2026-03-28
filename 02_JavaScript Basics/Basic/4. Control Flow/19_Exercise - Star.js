

Showstars(5);

function Showstars(S) {
    for (let x = 1;x <= S;x++) {
        for (let y = 0; y < x;y++) {
            process.stdout.write("*");

        }
        console.log("")
    }
}