//Rest Operator

//First
function calculateCartPrice(...num) {
  return num;
}
console.log(calculateCartPrice(4, 10, 30, 50));

//Second
function calculateCartPrice1(num1, num2, ...num) {
  console.log(`a: ${num1}`);
  console.log(`b: ${num2}`);
  console.log(`Rest of them: ${num}`);
}
console.log(calculateCartPrice1(4, 10, 30, 50, 60));

//Passing arrays as function parameter
const numbers = [1, 2, 3, 4, 5];

function myArr(anyArray) {
  return anyArray[2];
}
console.log(myArr(numbers));

//Passing objects as function parameter
const users = {
  username: "Henry",
  price: 34,
  id: 3,
};

function myObj(anyObject) {
  return anyObject.username;
}
console.log(myObj(users));
