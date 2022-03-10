function BinarySearch(arr, low, mid, k) {
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] == k) {
      return "Yes";
    }

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

//   console.log(BinarySearch(arr, low, high, k));

function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let m = +input[2];
  let arr2 = input[3].trim().split(" ").map(Number);

  for (let i = 0; i < m; i++) {
    let k = arr2[i];
    // console.log(k);
    console.log(BinarySearch(arr, 0, arr.length - 1, k));
  }
}
if (process.env.USERNAME === "win10") {
  runProgram(`5
1 2 3 4 5
3
3 5 7`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
