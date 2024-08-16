//Method 1
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

//Function reference
addTwoNumbers;

//Function execution
addTwoNumbers(2, 3);

//Method 2
function numbersJoining(num3, num4) {
  let result = num3 + num4;
  return result;
}

let result = numbersJoining(4, 2);
console.log(result);

//Method 3 - Preferred Approach
function numbersCombining(num5, num6) {
  return num5 + num6;
}

console.log(numbersCombining(9, 1));

//Default Parameter
function myName(name = "Maick") {
  return `Hello ${name}!`;
}

console.log(myName("Malaika"));
