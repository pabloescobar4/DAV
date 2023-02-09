let arr = [10, 22, 3, 4, 222, 3, 5, 5, 2, 3, 5, 32, 4, 2, 4, 5, 6, 62, 4, 1];

const SelectionSort = (arr) => {
  // selection sort
  for (let i = 0; i < arr.length - 1; i++) {
    let temp;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

console.log(SelectionSort(arr));

const BubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let temp;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = arr[j];
      }
    }
    return arr;
  }
};

console.log("bubble", BubbleSort(arr));
