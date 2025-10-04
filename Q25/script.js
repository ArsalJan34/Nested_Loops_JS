var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10,11,12],
  [13,14,15],
  [16,17,18],
  [19,20,21]
];
let tempRow = arr[0];
arr[0] = arr[arr.length - 1];
arr[arr.length - 1] = tempRow;

console.log(arr);
