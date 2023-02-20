// // const arraySum = (array, n) => {
// //   if (n <= 0) {
// //     return 0;
// //   } else return arraySum(array, n - 1) + [n - 1];
// // };
// // let A = [1, 2, 3, 4, 5];
// // console.log(typeof A);
// // console.log(arr[arr.length - 1]);

// // function findSum(A, N) {
// //   if (N <= 0) return 0;
// //   return findSum(A, N - 1) + A[N - 1];
// // }

// // // Driver code

// let A = (Array = [(1, 2, 3, 4, 5)]);
// // let N = A.length;
// // console.warn(findSum(A, N));
// console.log(typeof A);

// // let n = A.length;

// // console.log(arraySum(A, n));

const arrSum = (arr, n) => {
  if (n == 1) {
    return arr[0];
  } else {
    return arr.pop() + arrSum(arr, n - 1);
  }
};

let arr = [1, 2, 3, 4, 5];
let n = arr.length;

console.log(arrSum(arr, n));
