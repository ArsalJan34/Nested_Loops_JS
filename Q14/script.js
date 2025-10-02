var max = arr[0][0];

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    if (arr[i][j] > max) {
      max = arr[i][j];
    }
  }
}
console.log("Largest =", max);
