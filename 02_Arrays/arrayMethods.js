// /*
// -> Arrays make shallow copies
// -> Shallow Copy - Shares the same reference
// -> Deep Copy - Doesn't share the same reference
// */

const numbers = [10, 20, 30, 40, 50];

//Adds a new element at the end of array
numbers.push(60);

//Adds a new element at the start of array
numbers.unshift(90);

//Removes the last array element
numbers.pop();

//Removes the first array element
numbers.shift();

//Returns true or false on the basis of wheather an element exists or not
console.log(numbers.includes(10));

//Returns the index of an element if it is present; otherwise returns -1
console.log(numbers.indexOf(60));

console.log(numbers);

//IMPORTANT: SLICE AND SPLICE DIFFERENCE

//SLICE -> Doesn't change the original array
const names = ["Ali", "Ahmad", "Arif", "Hina", "Adil"];

const names1 = names.slice(1, 4);

// console.log(`Sliced Array: ${names1}`);
// console.log(`Original Array: ${names}`);

//SPLICE -> Changes the original array
const cars = ["BMW", "Lemo", "Audi", "Rolls Royce", "Thar"];

const cars1 = cars.splice(1, 3);
console.log(`Spliced Array: ${cars1}`);
console.log(`Original Array: ${cars}`);

//Joining two arrays
const heros = ["batman", "superman", "robbin", "gladiator"];
const heros1 = ["spiderman", "deadpool", "ninja", "wolverine"];

//First way - Not preferred
const finalHeros = heros.concat(heros1);
console.log(finalHeros);

//Second way - Using spread operator
const arr1 = [10, 20, 30, 40, 50];
const arr2 = [60, 70, 80, 90, 100];
console.log([...arr1, ...arr2]);

//Tells whether something is an array or not
console.log(Array.isArray("Malaika"));

//Converts anything into an array
console.log(Array.from("Malaika"));

let sc1 = 100;
let sc2 = 200;
let sc3 = 300;

//Joins different elements into an array
console.log(Array.of(sc1, sc2, sc3));
