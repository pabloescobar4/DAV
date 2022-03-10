function checkPalindrome(N,string){
    var obj = {}
    let count = 0
    for(let i = 0;i< N; i++){
        if(obj[string[i]] === undefined){
            obj[string[i]] =  1;
        }else{
            obj[string[i]]++
        }
    }
    // console.log(obj);
  for( key in obj){
    if(obj[key] %2 != 0){
   count++
    };
  }
  if( count <=1){
    console.log("Possible!");
  }else{
    console.log("Not Possible!");
  }
}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let T = +input[0];
   let line = 1;
   for(let i = 0;i < T; i++){
       let N = +input[line++]
       let string = input[line++].trim().split("");
    //    console.log(string);
    checkPalindrome(N,string)
   }
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`2
    6
    aabbcc
    5
    aabcd`);
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


// let N = arr.length
// let arr2  =  arr.sort((a , b) => a-b)
// console.log(arr2);
// let good =[]
// for( let i = 0;i<N;i++ ){
//   if( arr[i] = arr2[i]){
//     good.push(arr[i])
//   }
// }
// console.log(good);

// function solve(A, n)
// {
//     var i, cnt = 0, j;
 
//     // Array to store parent node of traversal.
//     var parent = new Array(n + 1);
 
//     // Array to determine whether current node
//     // is already counted in the cycle.
//     var vis = new Array(n + 1);
 
//     // Initialize the arrays.
//     parent.fill(-1);
//     vis.fill(0);
 
//     for(i = 0; i < n; i++)
//     {
//         j = i;

//         if (parent[j] == -1)
//         {

//             while (parent[j] == -1)            {
//                 parent[j] = i;
//                 j = (j + A[j] + 1) % n;
//             }
//             if (parent[j] == i) {
//                 while (!vis[j])     {
//                     vis[j] = 1;
//                     cnt++;
//                     j = (j + A[j] + 1) % n;
//                 }
//             }
//         }
//     }
//     return cnt;
// }
 
// // Driver code
// var A = [ 0 ,4, 0 , 0,3, 4, 1, 0, 2]
// var n = A.length;
// solve(A, n)


// function findClosest(arr, target)
// {
//     let n = arr.length;
 
//     // Corner cases
//     if (target <= arr[0])
//         return arr[0];
//     if (target >= arr[n - 1])
//         return arr[n - 1];
 
//     // Doing binary search
//     let i = 0, j = n, mid = 0;
//     while (i < j)
//     {
//         mid = (i + j) / 2;
 
//         if (arr[mid] == target)
//             return arr[mid];
 
//         // If target is less than array
//         // element,then search in left
//         if (target < arr[mid])
//         {
      
//             // If target is greater than previous
//             // to mid, return closest of two
//             if (mid > 0 && target > arr[mid - 1])
//                 return getClosest(arr[mid - 1],
//                                   arr[mid], target);
               
//             // Repeat for left half
//             j = mid;             
//         }
 
//         // If target is greater than mid
//         else
//         {
//             if (mid < n - 1 && target < arr[mid + 1])
//                 return getClosest(arr[mid],
//                                   arr[mid + 1],
//                                   target);               
//             i = mid + 1; // update i
//         }
//     }


//     return arr[mid];
// }

// function getClosest(val1, val2, target)
// {
//     if (target - val1 >= val2 - target)
//         return val2;       
//     else
//         return val1;       
// }
// let target = 11;
// let arr = [ 0,2,3,4,5 ];

// console.log(findClosest(arr, target));


  // let arr = [ 0 ,4, 0 , 0,3], value = 0
  // // let sum = arr.reduce((a ,b) => a+b)
  // console.log(sum);