var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let total = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    total += arr[i][j];
    count++;
  }
}
console.log("Average =", total / count);
