let myName = "Malaika";
let ageNumber = 23;

//Not a preferred way to concatenate strings
console.log("My name is " + myName + " and age is " + ageNumber);

//Use this approach i.e. back ticks for string concatenation
console.log(`My name is ${myName} and age is ${ageNumber}`);

//String Methods
let nickName = "maick";
let lastName = "       zafar         ";

//Converts into uppercase -> MAICK
console.log(nickName.toUpperCase());

//Converts into lowercase -> maick
console.log(nickName.toLowerCase());

//Returns the character at a specified index -> c
console.log(nickName.charAt(3));

//Returns the index of a particular character
console.log(nickName.indexOf("m"));

//Returns a substring; starting index (inclusive), ending index (exclusive)
console.log(nickName.slice(0, 4));

//Returns a substring; starting index (inclusive), ending index (exclusive)
console.log(nickName.substring(0, 4));

//For replacement
console.log(nickName.replace("k", "y"));

//Removes the white spaces
console.log(lastName.trim());
