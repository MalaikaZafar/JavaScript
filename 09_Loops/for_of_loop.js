//'for of' loop can be used with iterable i.e. arrays, strings and map (not object)

const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(`Value: ${num}`); //1, 2, 3, 4, 5
}

//'map' is another data structure in JS that is similar to object but holds unique values only
const map = new Map();

map.set("Pak:", "Pakistan");
map.set("Ind:", "India");
map.set("US:", "United States");

//For printing keys only
for (const [key] of map) {
  console.log(key); //Pak:, Ind:, US:
}

//For printing keys and values
for (const [key, values] of map) {
  console.log(`${key} and ${values}`); //Pak: and Pakistan, Ind: and India, US: and United States
}

//For printing the whole object
for (const key of map) {
  console.log(key);
}
