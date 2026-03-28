
// console.log(true && true)

let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;
console.log('Eligible',eligibleForLoan)

let applicationRefused = !eligibleForLoan;
console.log('Application',applicationRefused);


