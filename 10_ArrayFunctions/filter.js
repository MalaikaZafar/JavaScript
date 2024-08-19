const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Explicit return - use of 'return' keyword
let filteredNums = numbers.filter( (number) => {
    return number < 5
} )

console.log(filteredNums);

//Implicit return - no use of 'return' keyword
let newNums = numbers.filter( (number) => (number > 5) )

console.log(newNums);
