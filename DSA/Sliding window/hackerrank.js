// // function minimumAbsolute(arr,K, N){
// //     let minimum  = arr[0]
// //     let diff = 0;
// //     for(let i =0;i<K;i++) {
// //         diff -=arr[i];
// //     }
// //     if(diff < minimum){
// //         diff = minimum;
// //     }
// //     for( let i = K;i<N;i++ ){
// //         diff -= arr[i];
// //         diff -= arr[i-K]
// //     if(diff < minimum){
// //         diff = minimum;
// //     }
// //     }
// // return minimum;
// // }

// // let arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
// // let K = 2;
// // let N = arr.length-1;

// // console.log(minimumAbsolute(arr,K, N));










// // function minimum(arr, N){
// // let min = 0;
// // let diff = 0;
// // for(let i = 0;i<N;i++) {
// //     for(let j = i+1;j<N;j++) {
// //         if(arr[j] - arr[i] < min){
// //          min = diff;
// //         }
// //     }
// //     console.log(diff);
// // }
// // }

// arr.sort(function(a, b)
//         {return a - b});
          
//   let diff = Number.MAX_VALUE;
          
 
//         for (let i = 0; i < n - 1; i++)
//             if (arr[i + 1] - arr[i] < diff){
//                 diff = arr[i + 1] - arr[i];
          
//             }
//         return diff;
//     }



// arr = arr.sort((a, b) =>a-b);
// let N = arr.length-1;

// minimum(arr, N)


function findMinDiff(arr, n){


    
    
    let diff = Number.MAX_VALUE;
    

    for (let i = 0; i < n - 1; i++)
    if (arr[i + 1] - arr[i] < diff){
    diff = arr[i + 1] - arr[i];
    }

    return diff;
}

// let arr = [1, 5, 3, 19, 18, 25];
    let arr = [1, -3, 71, 68, 17];
    
console.log(findMinDiff(arr, arr.length));