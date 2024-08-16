const tinderUser = {
  name: "Sammy",
  id: 123,
  isLoggedIn: false,
  followers: "20k",
  status: "available",
};

//To access object keys
console.log(Object.keys(tinderUser));

//To access object values
console.log(Object.values(tinderUser));

//Combining objects together
const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };
const obj3 = { 7: "g", 8: "h", 9: "i" };

//First Approach
const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);

//Second Approach - Preferred
const obj5 = { ...obj1, ...obj2, ...obj3 };
console.log(obj5);

//Array of objects
const users = [
  {
    id: 1,
    name: "Samuel",
    available: false,
  },
  {
    id: 2,
    name: "Henry",
    available: true,
  },
  {
    id: 3,
    name: "Dakota",
    available: false,
  },
];
console.log(users[1].name);

//Object Nesting
const userNames = {
  fullnames: {
    firstName: "Malaika",
    lastName: "Zafar",
  },
};

console.log(userNames.fullnames.lastName);
