// function suchPairs(N,K,arr){
// let left = 0;
// let right = arr.length-1;
// arr = arr.sort((a,b) => a-b)
// // console.log(arr);
// while (left < right){
//     if(left + right ==  K){
//         return 1
//     }else {
//         left++;
//     }
//   }
//   return -1
// }
// function runProgram(input) {
//     input = input.trim().split('\n'); 
//     let T = +input[0];
//     let line = 1;
//     for( let i = 1; i <= T; i++){
//         let [N, K] = input[line++].trim().split(" ").map(Number);
//         let arr = input[line++].trim().split(" ").map(Number);
//         // 
//         console.log(suchPairs(N,K,arr));
//     }   
//   }
//   if (process.env.USERNAME === "win10") {
//     runProgram(`10
//     6 16
//     2 0 2 5 -3 0
//     9 3
//     6 -6 -7 8 -4 8 -6 1 4
//     1 -1
//     1
//     3 -3
//     -2 3 0
//     5 -9
//     4 5 0 -3 3
//     7 4
//     1 2 1 6 -2 7 0
//     7 -10
//     2 -5 6 -1 5 -1 6
//     4 -12
//     1 -2 -3 -4
//     6 0
//     5 -6 5 5 3 0
//     2 3
//     -2 -2`);
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

function suchPairs(N,K,arr){
  let left = 0;
  let right = arr.length-1;
  arr = arr.sort((a,b) => a-b)
  while (left < right){
      if(arr[left] + arr[right] ==  K){
          return 1
      }else if(arr[left] +  arr[right] > K){
          right--
      }else {
    left++;
      }
  }
  return -1
  }
  
  function runProgram(input) {
      input = input.trim().split('\n'); 
      let T = +input[0];
      let line = 1;
      for( let i = 0; i < T; i++){
          let [N, K] = input[line++].trim().split(" ").map(Number);
          let arr = input[line++].trim().split(" ").map(Number);
          // console.log(arr);
          console.log(suchPairs(N,K,arr));
      }   
    }
    if (process.env.USERNAME === "win10") {
      runProgram(`10
      6 16
      2 0 2 5 -3 0
      9 3
      6 -6 -7 8 -4 8 -6 1 4
      1 -1
      1
      3 -3
      -2 3 0
      5 -9
      4 5 0 -3 3
      7 4
      1 2 1 6 -2 7 0
      7 -10
      2 -5 6 -1 5 -1 6
      4 -12
      1 -2 -3 -4
      6 0
      5 -6 5 5 3 0
      2 3
      -2 -2`);
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