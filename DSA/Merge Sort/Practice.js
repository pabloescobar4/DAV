let arr = [1, 34, 53, 33, 56, 55, 87, 78, 98, 89, 767];

function quickSort(arr) {
  if (arr.length == 1) {
    return arr;
  }
  let lastIndex = arr[arr.length - 1];
  let leftArr = [],
    rightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < lastIndex) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quickSort(leftArr), lastIndex, ...quickSort(rightArr)];
  } else if (leftArr.length > 0) {
    return [...quickSort(leftArr), lastIndex];
  } else {
    return [...quickSort(rightArr), lastIndex];
  }
}
console.log(quickSort(arr));
