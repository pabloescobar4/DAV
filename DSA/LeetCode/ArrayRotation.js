// Given an array of integers arr[] of size N and an integer,
// the task is to rotate the array elements to the left by d positions.

let arr = [3, 4, 5, 6, 7, 1, 2];
let d = 2;
let array1 = arr.slice(0, d);
let array2 = arr.slice(d, arr.length);
let result = array2.concat(array1);
console.log(result);
// console.log(array2);
