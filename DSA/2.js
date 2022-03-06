

// function code(str1, str) {
//   // console.log(str1,str);

//   function result(str1, str) {
//     if (str1[0] > str[0]) {
//       return 'False';
//     } else if (str1[0] < str[0]) {
//       return 'True';
//     } else {
//       if (str1[1] > str[1]) {
//         return 'False';
//       } else if (str1[1] < str[1]) {
//         return 'True';
//       } else {
//         if (str1[2] > str[2]) {
//           return 'False';
//         } else {
//           return 'True';
//         }
//       }
//     }
//     return 'True';
//   }

//   console.log(result(str1, str));
// }

// function runProgram(input) {
//   input = input.trim().split('\n');
//   let testCases = Number(input[0]);

//   let line = 1;

//   for (let i = 0; i < testCases; i++) {
//     let str1 = input[line].split('.').map(Number);
//     line++;
//     let str = input[line].split('.').map(Number);
//     line++;

//     code(str1, str);
//   }
// }

// if (process.env.USER === 'dheerajmehta') {
//   runProgram(`3
//   2.0.1
//   1.9.8
//   12.0.1
//   12.10.0
//   1.1.10
//   1.1.12`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding('ascii');
//   let read = '';
//   process.stdin.on('data', function (input) {
//     read += input;
//   });
//   process.stdin.on('end', function () {
//     read = read.replace(/\n$/, '');
//     read = read.replace(/\n$/, '');
//     runProgram(read);
//   });
//   process.on('SIGINT', function () {
//     read = read.replace(/\n$/, '');
//     runProgram(read);
//     process.exit(0);
//   });
// }







// let matrix = [
//   [0,2,3,4],
//   [0,6,7,8],
//   [0,10,11,12],
//   [0,14,15,16],
//   [0,16,17,18],
// ];
// let N =4
// let M= 5
// for(var i =0;i<N;i++){
//   var arr =[]
//  for(var j= 0;j<M;j++){
//     arr.push(matrix[j][i])
//  }console.log(arr.join(" "))
// }

// let arr = [1,2,3,4,5,6,7,8]
// let n = arr.length

function runProgram(input) {
    // Write code here
   input = input.trim().split("\n")
   let n = +input[0]
   let arr = input[1].trim().split(" ").map(Number);
  //  console.log(n,arr)
  let halfway = arr.length/2


let firsthalf = halfway/2
let c1 = 0
for(var i=0;i<firsthalf;i++){
  var z = arr[i]
  c1+=z

}
//console.log(c1)
let c2 = 0
for(var i=firsthalf;i<halfway;i++){
  var z = arr[i]
  c2+=z

}
//console.log(c2)
let c3 = 0
let sec = n*3/4
for(var i=halfway;i<sec;i++){
  var z = arr[i]
  c3+=z

}
//console.log(c3)
let c4 = 0

for(var i=sec;i<n;i++){
  var z = arr[i]
  c4+=z

}
//console.log(c4)
console.log(2*c1 + c2 + 2*c3 + c4)



  }
  if (process.env.USER === "dheerajmehta") {
    runProgram(`8
    1 2 3 4 5 6 7 8`);
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
      process.exit(0);
    });
  }
  
  







