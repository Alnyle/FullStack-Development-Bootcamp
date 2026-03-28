
// Read, Write, Execute
const readPermission = 4;     // 4 = 00000100
const writPermission = 2;     // 2 = 00000010
const executePermission = 1;  // 1 = 00000001
// 

let myPermission = 0;
myPermission = myPermission | readPermission | writPermission; // Bitwise OR use add permission

let message = (myPermission & readPermission) ? 'Yes' : 'No'; // Bitwise AND use to check permission

console.log(myPermission);


// // 1 = 00000001
// // 3 = 00000011
// // R = 00000011 -> R = 3


// console.log(1 | 3) // Bitwise OR // R = 3

// // 1 = 00000001
// // 3 = 00000011
// // R = 00000001 -> R = 1

// console.log(1 & 3) // Bitwise AND // R = 1

