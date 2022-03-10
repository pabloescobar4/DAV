function runProgram(input) {
  input = input.trim().split("\n");
  let [N, X, Y] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  arr = arr.sort((a, b) => a - b);
  //    console.log(arr);
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i] >= X && arr[i] <= Y) {
      count++;
    }
  }
  console.log(count);
}
if (process.env.USERNAME === "win10") {
  runProgram(`10 37 40
  53 1 58 29 38 47 7 29 53 28`);
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
