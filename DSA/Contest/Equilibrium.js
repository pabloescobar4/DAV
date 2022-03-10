// // function equal(arr){
// //     
// //     for( let i = 0;i< arr.length;i++){
// //         for( let j = 0;j<i;j++){
// //             ar1.push(arr[j])
// //         } 

    
// //     }
// //     console.log(ar1)
// //     console.log(ar2)

// // }

// // equal(arr)

// function Eq(n,arr) {
//     let left = [];
//     let right = [];
//     left[0] = 0
//     right[n-1] = 0
//     for (let i=1;i<n;i++)  {
//         left[i] = left[i-1] + right[i-1]
//     }
    
//     for (let i=n-2;i>=0;i--) {
//         right[i] = right[i+1] + left[i+1]
//     }
//     for (let i=0;i<n;i++) {
//         if (left[i] == right[i]) {
//             return (i + 1)
//         }
//     }  
// }

// function runProgram(input) {
//     input = input.split('\n');
//     let n = +input[0];
//     let arr = input[1].trim().split(" ").map(Number);
//     console.log(Eq(n,arr));
//   }
//   if (process.env.USERNAME === "win10") {
//     runProgram(`5
//     3 3 5 5 1`);
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
//     process.on("SIGlet", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0) ;
//     });
//   }


function bs(arr){
let sum1  = arr.reduce((currSum, arrValue) => currSum+ arrValue )
// console.log(sum1);
let ar1= [], ar2 = [],sum2 = 0
let mid = Math.floor(arr.length/2)
// console.log(mid);
for(let i = 0;i<=mid;i++){
    sum2 =sum2+ arr[i] 
// console.log(sum2);
if(sum1 - sum2 == sum2){
    return mid;
}else if( sum1 -  sum2 > sum2){
    mid - mid-1
}else{
    mid+1
}

}
}
let arr  = [3,3,5,5,1]
console.log(bs(arr));