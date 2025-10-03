var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
var max = arr[0][0];

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    if (arr[i][j] > max) {
      max = arr[i][j];
    }
  }
}
console.log("Largest =", max);
