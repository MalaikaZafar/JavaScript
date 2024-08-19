//'for in' loop can be used with iterable i.e. arrays as well as objects

const languages = {
  js: "JavaScript",
  py: "Python",
  cpp: "C++",
  rb: "Ruby",
};

//For printing keys
for (const key in languages) {
  console.log(key);
}

//For printing values
for (const key in languages) {
  console.log(languages[key]);
}

//For printing keys and values
for (const key in languages) {
  console.log(`${key} is for ${languages[key]}`);
}

const programming = ["JS", "PY", "RB", "CPP"];

for (const key in programming) {
  console.log(programming[key]);
}

//IMPORTANT: We can also use something other than 'key' in the loop
