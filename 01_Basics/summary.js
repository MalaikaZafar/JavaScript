/* Categorization of Data Types -> 2

1- Primitive Data Type (Call by Value)
-> Number, String, Boolean, Bigint, null, undefined, symbol

2- Non-primitive Data Type (Call by Reference)
-> Array, Object, Function

IMPORTANT: JS is a dynamically typed language because the data types are assigned during the execution time. */

const heros = ["spiderman", "batman", "marvel"]; //Array

let myObj = {
  name: "malaika",
  age: 12,
  department: "Computer Science",
}; //Object

const myFunction = function () {
  console.log("Hello World!");
}; //Function

console.log(typeof heros); //Object
console.log(typeof myObj); //Object
console.log(typeof myFunction); //Function object


/* Memory in JavaScript

1 - Stack (For Primitive Data Type)
2 - Heap (For Non-Primitive Data Type)

*/

//Stack Memory -> Primitive Data Type
let email = "maick@gmail.com";
let newEmail = email; //Copy of "email" is assigned to "newEmail"
newEmail = "malaika@google.com";

console.log(email); //maick@gmail.com
console.log(newEmail); //malaika@google.com


//Heap Memory -> Non-Primitive Data Type
let object1 = {
    id: 2,
    school: "The Educators"
};

let object2 = object1; //Reference of object1 is assigned to object2
object2.school = "Roots IVY"

console.log(object1.school); //Roots IVY
console.log(object2.school); //Roots IVY