const user = {
  username: "Maick",
  website: "YouTube",
  price: 1000,
  welcomeMessage: function () {
    console.log(`${this.username}, Hello!`); //'this' keyword refers to the current context
  },
};

user.welcomeMessage(); //Maick, Hello!
user.username = "Malaika";
user.welcomeMessage(); //Malaika, Hello!

//Arrow Functions

//First Approach - Explicit Return ('return' keyword is used)
const addNumbers = (num1, num2) => {
  return num1 + num2;
};

console.log(addNumbers(9, 1));

//Second Approach - Implicit Return ('return' keyword is not used)
const subtractNumbers = (num1, num2) => num1 - num2;

console.log(subtractNumbers(5, 1));
