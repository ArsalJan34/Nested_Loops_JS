var arr = [
  [1, 2, 3],
  [4, 5, 6],
[7,8,9]]
var diagonalSum = 0;
for (var i = 0; i < arr.length; i++) {
  diagonalSum += arr[i][i];
}
console.log("Diagonal sum =", diagonalSum);
