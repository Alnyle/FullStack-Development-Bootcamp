

const marks = [80,80,90]

console.log(calculateGrader(marks));

function calculateGrader(marks) {
    let sum = 0;
    for (let i = 0;i < marks.length;i++)
        sum += marks[i];

    let avg = sum / marks.length;

    if (avg < 60) return 'F';
    if (avg < 70) return 'D';
    if (avg < 80) return 'C';
    if (avg < 90) return 'B';
    return 'A';


}



















// const marks = [80,80,90]

// console.log(calculateGrader(marks));

// function calculateGrader(marks) {
//     for (let i = 0;i < marks.length;i++) {
//         if (marks[i] >= 1 && marks[i] <= 59)
//             console.log('F');
//         else if (marks[i] >= 60 && marks[i] <= 69)
//             console.log('D')
//         else if (marks[i] >= 70 && marks[i] <= 79)
//             console.log('D')
//         else if (marks[i] >= 80 && marks[i] <= 89)
//             console.log('B');
//         else if (marks[i] >= 90 && marks[i] <= 100)
//             console.log('A');
//     }
// }