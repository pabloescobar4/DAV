// console.log(arr[mid])
function xxx(arr, low, mid, k) {
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2); // 4

    if (arr[mid] == k) {
      return "Yes";
    } // mera aawaj ja raha

    if (arr[mid] < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return "No";
}

let arr = [1, 2, 3, 45, 72, 1202, 4, 5, 6, 7, 8, 9, 10, 56];
arr.sort((a, b) => a - b);
let k = 599;

let low = 0;
let high = arr.length - 1;

console.log(xxx(arr, low, high, k));
