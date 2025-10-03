var arr = [
  [1, -2, 3],
  [-4, 5, -6],
  [7, -8, 9]
];

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    if (arr[i][j] < 0) {
      arr[i][j] = 0;
    }
  }
}
console.log(arr2);
