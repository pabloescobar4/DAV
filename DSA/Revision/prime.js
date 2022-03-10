// function runProgram(input) {
//   let N = +input
//   let count=0
// let i,j 
// for(i=2;i<=N;i++){
// for( j=1;j<=i;j++){
//  if(i%j==0){
//  count++
//  }
// }
// if(count==2){
//    console.log(i)
// }
//    count=0 
// }
//  }
//   if (process.env.USERNAME === "win10") {
//     runProgram(`5`);
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


let num = 5;
let count = 0;
let i,j;
for( i = 2;i<=num;i++ ){
  for( j = 1;j<=i;j++){
    if(i % j == 0){
      count++;
    }
  }
  if(count == 2){
    console.log(i)
  }
  count=0
}