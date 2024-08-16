let id = 102;

//Number to String conversion
let newID = id.toString();

console.log(typeof newID); //string

let num = 103.234;

//Answer upto 2 decimal places
console.log(num.toFixed(2)); //103.23

let num1 = 10000000000;

//Puts commas between zeros
console.log(num1.toLocaleString()); //10,000,000,000

//Math Functions

//Gives random values between 0 and 1
console.log(Math.random());

//Shifts one decimal place i.e. 0.8902 -> 8.902
console.log(Math.random() * 10);

//Avoids the case of 0
console.log(Math.random() * 10 + 1);

//Will always take the higher value
console.log(Math.ceil(4.1)); //5

//Will always take the lower value
console.log(Math.floor(4.9)); //4

//Will round off the number
console.log(Math.round(8.9)); //9
