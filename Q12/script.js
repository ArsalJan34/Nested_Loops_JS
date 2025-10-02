let total = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    total += arr[i][j];
    count++;
  }
}
console.log("Average =", total / count);
