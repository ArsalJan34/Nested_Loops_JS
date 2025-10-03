var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10,11,12]
];
var count = 0;
for(var i = 0; i<arr.length; i++){
    for(var j =0; j< arr[i].length; j++){
        if(arr[i][j] % 2 === 0){
            count++;
        }
    }
}
 console.log(count)
 

