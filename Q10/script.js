var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
for (var j = 0; j < arr[0].length; j++) {
  var col = "";
  for (var i = 0; i < arr.length; i++) {
    col += arr[i][j] + " ";
  }
  console.log(col);
}
