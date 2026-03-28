

function getRandomElement<T>(items: T[]): T {
    let index = Math.floor(Math.random() * items.length);
    return items[index];
}


let nums: number[] = [1, 2, 3];
let names: string[] = ['first', 'second', 'third']
 

let randomEle = getRandomElement<string>(names);
console.log(randomEle);


// Arrays
const score: Array<number> = [1,2,3,4,4]
score.push(12)
console.log(score);
