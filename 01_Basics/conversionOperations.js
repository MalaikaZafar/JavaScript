let score = 33;
let score1 = Number(score);
console.log(score1); //number (33)

let score2 = "33abc";
let score3 = Number(score2);
console.log(score3); //NaN

let score4 = "Malaika";
let score5 = Number(score4);
console.log(score5); //NaN

let score6 = true;
let score7 = Number(score6);
console.log(score7); //1

let score8 = false;
let score9 = Number(score8);
console.log(score9); //0

let score10 = null;
let score11 = Number(score10);
console.log(score11); //0

let score12 = undefined;
let score13 = Number(score12);
console.log(score13); //NaN

let isLoggedIn = 1;
let booleanValue = Boolean(isLoggedIn);
console.log(booleanValue); //true

let isLoggedIn1 = 0;
let booleanValue1 = Boolean(isLoggedIn1);
console.log(booleanValue1); //false

let isLoggedIn2 = "";
let booleanValue2 = Boolean(isLoggedIn2);
console.log(booleanValue2); //false

let isLoggedIn3 = "maick";
let booleanValue3 = Boolean(isLoggedIn3);
console.log(booleanValue3); //true

let number = 22;
let stringNumber = String(number);
console.table([stringNumber, typeof stringNumber]);

//Operations

console.log(2 + 2); //4
console.log(2 - 1); //1
console.log(2 * 3); //6
console.log(10 / 2); //5
console.log(2 % 2); //0
console.log(2 ** 3); //8

//Tricky Conversions
console.log(5 + "2"); //52
console.log("5" + 2); //52
console.log("5" + "5"); //55
console.log("1" + 2 + 2); //122; because string appeared first that is why the rest of the numbers are also treated as string
console.log(7 + 2 + "9"); //99; because numbers appeared first so they are added and then concatenated with the string
