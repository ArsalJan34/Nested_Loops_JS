var arr = [
  [1, 2, 3],
  [4, 5, 6],
[7,8,9]]
for (var i = 0; i < arr.length; i++) {
  var row = "";
  for (var j = 0; j < arr[i].length; j++) {
    if (i === 0 || i === arr.length - 1 || j === 0 || j === arr[i].length - 1) {
      row += arr[i][j] + " ";
    } else {
      row += "  "; 
    }
  }
  console.log(row);
}
