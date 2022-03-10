function minAndMaxSum(N, M, arr) {
let sum1=0,sum2=0;
    let diff = N - M;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let res = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = res;
      }
    }
  }
  for( let i = 0;i<diff;i++){
      sum1+=arr[i]
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let res = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = res;
      }
    }
  }
  for( let i = 0;i<diff;i++){
    sum2+=arr[i]
}
console.log(sum2- sum1);
}
function runProgram(input) {
  input = input.trim().split("\n");
  let testCases = +input[0];
  let line = 1;
  for (let i = 1; i <= testCases; i++) {
    let [N, M] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    // console.log(arr);
    minAndMaxSum(N, M, arr)
  }
}
if (process.env.USERNAME === "win10") {
  runProgram(`1
    5 1
    2 5 4 4 4`);
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
