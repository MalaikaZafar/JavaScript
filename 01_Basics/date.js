//Creating a new date object
let myDate = new Date();
console.log(myDate);

//Different methods to print the date
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());

//Passing customized format
let myDate1 = new Date(2024, 0, 12);
console.log(myDate1.toLocaleDateString());
