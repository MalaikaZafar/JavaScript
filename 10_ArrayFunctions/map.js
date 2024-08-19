/*
Difference between 'for each' and 'map':
-> for each is used for the purpose of iteration; the callback function will be executed for each array element. Hence it will return nothing

-> map function is used to create a new array populated with the results of the function performed on every array element. It returns a new array
*/

const numbers = [2, 4, 6, 8, 10];

let product = numbers.map((number) => {
  return number * 2;
});

console.log(product);
