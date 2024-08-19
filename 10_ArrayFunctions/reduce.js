const nums = [1, 2, 3];

let result = nums.reduce((acc, currVal) => {
  console.log(`Acc: ${acc} and Current Val: ${currVal}`);
  return acc + currVal;
}, 0);

console.log(result);
