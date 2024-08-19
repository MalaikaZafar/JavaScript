//Closure: When child functions are able to access the variables present in the parent function

function one() {
  let name = "Maick";

  function two() {
    let website = "YouTube";
    console.log(`${name} ${website}`);
  }

  console.log(website); //Error
  two(); //Maick YouTube
}

one();
