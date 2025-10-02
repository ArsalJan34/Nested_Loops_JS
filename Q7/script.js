for (let i = 1; i <= 4; i--) {
  let row = "";
  for (let j = 1; j <= i; j--) {
    row += "* ";
  }
  console.log(row);
}
//  i want it to make it reverse 
for (let i = 4; i >= 1; i--) {
  let row = "";         
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}