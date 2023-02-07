// const MaxArray = (arr, n) => {
//   let max = 0;
//   for (let i = 0; i < n; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

const MaxArray = (arr, n) => {
  let array = [];
  let max = arr[0];
  for (let i = 0; i < n; i++) {
    if (arr[i] >= max) {
      max = arr[i];
      array.push(arr[i]);
    } else {
      array.push(max);
    }
  }
  return array;
};

let arr = [-1, -4, 6, 5, 4, 6, 9, 3, 9, 10];
let n = arr.length;

console.log(MaxArray(arr, n));
