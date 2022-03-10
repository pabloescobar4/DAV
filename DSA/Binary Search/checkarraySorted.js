// function checkarraySorted(N, arr){
//     let left = 0;
//     let right =  N-1;
//     while(left < right){
//         if(left > right ){
//             return -1
//         }
//         if(left == right){
//             return left ;
//         }
//         let mid = (left + (right- left)/2)
//         console.log(mid);
//     }
// }

// function runProgram(input) {
//     input = input.trim().split('\n'); 
//    let N = +input[0];
//    let arr = input[1].trim().split(" ").map(Number)
//    console.log(arr);
//    checkarraySorted(N, arr)
//   }
//   if (process.env.USERNAME === "win10") {
//     runProgram(`6
//     3 4 7 9 1 2`);
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


function findPivot(arr, low, high){
    if (high < low)
        return -1;
    if (high == low)
        return low;
 
    var mid = parseInt((low + high) / 2);
    if (mid < high && arr[mid + 1] < arr[mid])
    {
        return mid;
    }
 
    if (mid > low && arr[mid] < arr[mid - 1])
    {
        return mid - 1;
    }
 

    if (arr[low] > arr[mid])
    {
        return findPivot(arr, low, mid - 1);
    }
    else
    {
        return findPivot(arr, mid + 1, high);
    }
}
 

function isRotated(arr, n)
{
    var l = 0;
    var r = n - 1;
    var pivot = -1;
    if (arr[l] > arr[r])
    {
        pivot = findPivot(arr, l, r);
        var temp=pivot;

        if (l < pivot)
        {
            while (pivot > l)
            {
                if (arr[pivot] < arr[pivot - 1])
                {
                    return false;
                }
                pivot--;
            }
        }
 

        else
        {
            pivot=temp;
            pivot++;
            while (pivot < r) {
                if (arr[pivot] > arr[pivot + 1]) {
                    return false;
                }
                pivot++;
            }
        }
 
    
        return true;
    }
    else {
        return false;
    }
}

var arr = [4, 5, 8, 9, 10];
if (isRotated(arr, 5))
   console.log("true");
else
   console.log("false");
 