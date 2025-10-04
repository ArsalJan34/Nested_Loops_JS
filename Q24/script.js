var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10,11,12],
  [13,14,15],
  [16,17,18],
  [19,20,21]
];

var minSum = Infinity;
var minRowIndex = 0;

for (var i = 0; i < arr.length; i++) {
  var rowSum = 0;
  for (var j = 0; j < arr[i].length; j++) {
    rowSum += arr[i][j];
  }

  if (rowSum < minSum) {
    minSum = rowSum;
    minRowIndex = i;
  }
}

console.log("Row", minRowIndex + 1, "has the smallest sum =", minSum);
