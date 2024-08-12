//No re-assignment allowed because of const keyword
const accountId = 12345;

//Prefer using let instead of var
let accountEmail = "malaika@gmail.com";

//Never use var for declaration because of block and functional scope
var accountTitle = "malaika";

//No use of const, let or var keywords but still it will work; However, this method is not preferred
accountCity = "Islamabad";

//Only declaration and no initialization = undefined
let accountState;

//Values will be updated
accountEmail = "maickzafar@gmail.com";
accountTitle = "maick";
accountCity = "Rawalpindi";

//Output in tabular form
console.table([
  accountId,
  accountEmail,
  accountTitle,
  accountCity,
  accountState,
]);
