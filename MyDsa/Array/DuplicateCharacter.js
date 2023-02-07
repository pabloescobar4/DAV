let arr = [10, 22, 3, 4, 222, 3, 5, 5, 2, 3, 5, 32, 4, 2, 4, 5, 6, 62, 4, 1];
const DuplicateCharacter = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //   console.log(arr[i], " =======", arr[j]);
      if (arr[i] == arr[j]) {
        return i;
      }
    }
  }
};

console.log(DuplicateCharacter(arr));
