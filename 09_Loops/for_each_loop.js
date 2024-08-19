//'for each' loop is designed specifically for arrays and array like objects such as NodeList
//This loop expects a call back function
//The most important use of this loop is when we want to iterate an array of objects

const names = ["Ali", "Adil", "Umer", "Hadi"];

//First Approach - Arrow Function
names.forEach((item) => {
  console.log(item);
});

//Second Approach - Passing function as the callback
const printMe = (name) => {
  console.log(name);
};

names.forEach(printMe);

//Array of Objects
const coding = [
  {
    language: "JS",
    extension: ".js",
  },
  {
    language: "Java",
    extension: ".java",
  },
  {
    language: "Python",
    extension: ".py",
  },
];

coding.forEach((object) => {
  console.log(object.extension);
});
