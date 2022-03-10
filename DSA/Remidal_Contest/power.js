function sumPower(x, n, count) {
    let power = x - Math.pow(count, n);
    if (power < 0) return 0;
    else if (power === 0){ 
        return 1;
    }
    else{
         return sumPower(power, n, count + 1) + sumPower(x, n, count + 1);
    }
}
function runProgram(input) {

   let [x , n ] = input.trim().split(" ").map(Number)
    let count = 1
   console.log(sumPower(x, n, count));
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`100 2`);
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

 




// function sumPower(x,n, count){
//   for( let i = 0;i< n ; i++){
//     if((i**x) + (i** x) == n){
//       count+1
//     }
//     return count
//   }
// }

// function runProgram(input) {
//     input = input.trim().split('\n'); 
//     let [n , x ] = input[0].trim().split(" ").map(Number)
//     let count = 1
//    console.log( sumPower(x,n, count));
//   }
//   if (process.env.USERNAME === "win10") {
//     runProgram(`100 2`);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0) ;
//     });
//   }