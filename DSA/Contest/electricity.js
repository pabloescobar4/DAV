function unitsConsumed(n) {
  var bill = n;
var mandatory = 80;
var unit = 0;
var remain = 0;
var amount = (bill - mandatory);
if (amount > 650) {
    unit += 150;
    amount -= 650;
    //console.log(amount)
    unit = unit +(amount /10);
   
}
else if(amount >= 150 && amount <= 650){
    unit = unit +50;
    amount = amount -150;
    unit = unit +(amount/5);
    //console.log(unit)
}
else if(amount <= 150){
    unit = unit +(amount /3);
    //console.log(unit)
}
console.log(Math.floor(unit))
    //write code here
}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let n = +input;
   unitsConsumed(n)
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`230`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }

  // function unitsConsumed(n) {
  //   var bill = n;
  // var mandatory = 80;
  // var unit = 0;
  // var remain = 0;
  // var amount = (bill - mandatory);
  // if (amount > 650) {
  //     unit += 150;
  //     amount -= 650;
  //     //console.log(amount)
  //     unit = unit +(amount /10);
     
  // }
  // else if(amount >= 150 && amount <= 650){
  //     unit = unit +50;
  //     amount = amount -150;
  //     unit = unit +(amount/5);
  //     //console.log(unit)
  // }
  // else if(amount <= 150){
  //     unit = unit +(amount /3);
  //     //console.log(unit)
  // }
  // console.log(Math.floor(unit))
  //     //write code here
  // }