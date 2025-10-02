// for (var i = 0; i < 4; i++) {
//   var row = "";
//   for (var j = 0; j < 8; j++) {
//     if ((i + j) % 2 === 0) {
//       row += "#";
//     } else {
//       row += ".";
//     }
//   }
//   console.log(row);
// }
for (var i =1; i<=4; i++){
    var row = "";
    for (var j= 1; j <= 8; j++){
        if ((i+j)% 2 === 0){
            row += "#";
        }else {
            row += ". ";

        }
       
    }
     console.log(row);
}