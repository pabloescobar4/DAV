// Given an array and a number K where K is smaller than the size of the array.
// Find the K’th smallest element in the given array.
//  Given that all array elements are distinct

let arr = [7, 10, 4, 3, 20, 15],
  K = 4;
let array = arr.sort((a, b) => a - b);
let result = "";
for (let i = 0; i < array.length; i++) {
  result += array[K - 1];
  break;
}
console.log(result);
