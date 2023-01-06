// let arr = [243, 45, 23, 356, 3, 5346, 35, 5];
// let N = arr.length-1;

// for( let i = 0; i < N ; i++){
//     for(let j = 0 ; j < N-i-1; j++){
//         if(arr[j] > arr[j+1]){
//                 let  result =  arr[j]
//             arr[j] =  arr[j+1];
//             arr[j+1] = result;
//         }
//     }
// }
// console.log(arr);


let arr = [234, 457,237,7435,  312,124, 756,121,912,1, 1234,123456]

function sort(arr) {
// if( arr[1,2,3,4,5] )

do {
var isFinished = false;
for (let i = 0; i < arr.length; i++) {
if (arr[i] > arr[i + 1]) {
// if (1 element) less than (2 element) > this codeblock will run
let temp = arr[i]; // temp = 1
arr[i] = arr[i + 1]; // (1 element) replaced with (2 element)
arr[i + 1] = temp; // (2 element) replaced with (1 element)
isFinished = true; // its mean ("if this block run,while loop will run again!")
}
}
} while(isFinished); // if (false) it not gonna run!
return arr;
}

console.log(sort(arr));