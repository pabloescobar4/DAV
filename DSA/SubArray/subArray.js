// function subArray(N,K,arr){
//   let output = 0,count = 0;
//   let map = new Map()
//   for( let i = 0;i<N;i++){
//     if(!map.has(output)){
//       map.set(output, 1)
//     }else {
//       map.set(output, map.set(output) + 1)
//     }
//     output +=arr[i]
//     if(map.has(output-K)){
//       count+= map.get(output-K)
//     }
//   }
//   if (count>0){
//     return "Yes"
//   }else {
//     return "No"
//   }
// }
// function runProgram(input) {
//     input = input.trim().split('\n'); 
//     let T = +input[0]
//     let line = 1;
//     for( let i = 0;i< T;i++){
//       let [N , K ]= input[line++].trim().split(" ").map(Number)
//       let arr = input[line++].trim().split(" ").map(Number)
//       // console.log(arr)
//       console.log( subArray(N,K,arr))

//     }
   
//   }
//   if (process.env.USERNAME === "win10") {
//     runProgram(`3
//     5 3
//     1 2 1 3 4
//     4 5
//     1 2 1 3
//     3 2
//     1 2 1`);
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

console.log("abhishek");
console.log("Abhishek")