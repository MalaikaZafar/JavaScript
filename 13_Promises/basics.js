//Syntax 1

//Promise Creation
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async One Done!");
    resolve();
  }, 1000);
});

//Promise Consumption
promiseOne.then(function () {
  console.log("Promise One Resolved!");
});

//Syntax 2
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Two Done!");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Promise Two Resolved!");
});

//Syntax 3 - Preferred Syntax for Promises
new Promise(function (resolve, reject) {
  let error = false;
  if (!error) {
    console.log("Async Three Done!");
    resolve({ username: "maick", password: "123" });
  } else {
    reject();
  }
})
  .then(function (user) {
    return user.username;
  })
  .then(function (username) {
    console.log(`Username: ${username}`);
  })
  .catch(function (error) {
    console.log("Error Found!");
  })
  .finally(() => console.log("Finally!"));

//Syntax 4 - Async Await
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "malaika", password: "123" });
    } else {
      reject("Error Found!");
    }
  }, 4000);
});

async function consumePromiseFour() {
  try {
    const response = await promiseFour;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFour();

//Example - Using Async Await
// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Err:", error);
//   }
// }

//getAllUsers();

//Example - Using Promises
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log("Error!", error);
  });
