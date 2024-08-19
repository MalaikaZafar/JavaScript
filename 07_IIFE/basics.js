//Simple Function
function greeting() {
  console.log("Hi, YOU!");
}
greeting();

//Named IIFE
(function welcomeMessage() {
  console.log("Good Morning!");
})();

//Simple IIFE
((name) => {
  console.log(`How are you ${name}?`);
})("Malaika");
