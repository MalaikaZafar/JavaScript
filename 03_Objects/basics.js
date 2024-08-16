const JsUser = {
  name: "Malaika",
  age: 23,
  education: "Computer Science",
  university: "COMSATS Islamabad",
  classDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
};

//First approach to access an object
console.log(JsUser.university);

//Second approach to access an object
console.log(JsUser["university"]);

//Freeze an object if you don't want any modifications in it
Object.freeze(JsUser);

JsUser.age = 24;

console.log(JsUser.age); //23 as the object is frozen

JsUser.greeting = function () {
  console.log(`Hello ${JsUser.name}!`);
};

console.log(JsUser.greeting());
