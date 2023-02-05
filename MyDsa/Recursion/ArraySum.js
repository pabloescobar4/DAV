let arr = [1, 2, 3, 4, 5, 6];
let a = arr.length;

const arraySum = (array, a) => {
  let sum = 0;
  if (array.length == 1) return array[0];
  else return (array, a - 1) + arraySum[a - 1];
};
console.log(arraySum(arr, a));
// console.log(arr[arr.length - 1]);
