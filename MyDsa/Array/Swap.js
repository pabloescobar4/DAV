const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Swap = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    return ([arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]);
  }
};
console.log(Swap(arr));
