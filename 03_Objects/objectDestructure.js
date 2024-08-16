const courses = {
  courseName: "JS",
  courseInstructor: "Mosh",
  price: "free",
};

//Object Destructuring
const { courseInstructor } = courses;

//Rename the property
const { courseName: course } = courses;

console.log(courseInstructor);
console.log(course);
