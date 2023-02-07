let arr = [1, 2, 3, 4];
let finalArr = [];
function vfv(arr) {
  for (let i = 0; i < arr.length; i++) {
    let newarr = [],
      sum = 0;
    for (let j = i; j < arr.length; j++) {
      newarr.push(arr[j]);
      sum = sum + arr[j];
      console.log(newarr, "sum =====> ", sum);
      finalArr.push(newarr);
    }
  }
}
vfv(arr);
// console.log(finalArr, "finalArr");

// vfv(arr);
// function subarray(arr) {
//   let sub = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     let sum = 0;
//     for (let j = arr.length - 1; j >= i; j--) {
//       sub.push(arr.slice(i, j + 1));

//     }
//   }
//   return sub;
// }
