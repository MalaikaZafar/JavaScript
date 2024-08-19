/*
There are two types of scopes:
1 - Global Scope -> Is present outside the {} braces
2 - Block Scope -> Is present within the {} braces

IMPORTANT: Values present in global scope are accessible in the block scope but the values in block scope are not accessible in the global scope (the case of "var")
*/

let a = 100;
const b = 200;
var c = 300;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log(`Inner a: ${a}`); //10
    console.log(`Inner b: ${b}`); //20
    console.log(`Inner c: ${c}`); //30
}

console.log(`Outer a: ${a}`); //100
console.log(`Outer b: ${b}`); //200
console.log(`Outer c: ${c}`); //30


