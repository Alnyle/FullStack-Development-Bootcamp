

numbers = [1,2,3];

for (let number of numbers) 
    console.log(number);


// numbers.forEach(element => console.log(element));
numbers.forEach((element,index) => console.log(element, index));