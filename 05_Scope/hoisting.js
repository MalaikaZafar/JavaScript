//No error as addOne is a simple function
console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

//Error as the function is held in a variable which is not initialized
console.log(addTwo(6));

const addTwo = function (num) {
  return num + 2;
};
