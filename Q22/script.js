var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10,11,12],
  [13,14,15],
  [16,17,18],
  [19,20,21]
];
for (var j = 0; j < arr[0].length; j++) {
  var colSum = 0;
  for (var i = 0; i < arr.length; i++) {
    colSum += arr[i][j];
  }
  console.log("Col", j + 1, "sum =", colSum);
}
