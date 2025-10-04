var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10,11,12],
  [13,14,15],
  [16,17,18],
  [19,20,21]
];
var transpose = [];

for (var i = 0; i < arr[0].length; i++) {
  transpose[i] = [];
  for (var j = 0; j < arr.length; j++) {
    transpose[i][j] = arr[j][i];
  }
}
console.log(transpose);
