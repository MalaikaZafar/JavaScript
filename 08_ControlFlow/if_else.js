let teaPrice = 100;

//Simple if-else
if (teaPrice > 100) {
  console.log("Tea is expensive");
} else if (teaPrice < 100) {
  console.log("Tea is cheap");
} else {
  console.log("Tea is in budget");
}

//Ternary Operator
teaPrice >= 100
  ? console.log("Tea price is 100")
  : console.log("Tea price is less than 100");
