var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10,11,12],
  [13,14,15],
  [16,17,18],
  [19,20,21]
];

var maxSum = 0;
var maxRowIndex = 0;

for (var i = 0; i < arr.length; i++) {
  var rowSum = 0;
  for (var j = 0; j < arr[i].length; j++) {
    rowSum += arr[i][j];
  }
  if (rowSum > maxSum) {
    maxSum = rowSum;
    maxRowIndex = i;
  }
}
console.log( maxRowIndex + 1, " largest sum =", maxSum);
