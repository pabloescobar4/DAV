function basicMaths(N, A) {
  let array = [];
  let flag = -1;
  let sum = 0;
  let res = [];
  for (let i = 0; i < N; i++) {
    sum += A[i];
  }
  //   A.sort((a, b) => a - b);
  for (let i = 0; i < N; i++) {
    if ((sum - A[i]) % 7 == 0) {
      //   console.log(A[i]);
      res.push(A[i]);
    }
  }
  if (res.length == 0) {
    console.log(-1);
  } else {
    res = res.sort((a, b) => a - b);
    // console.log(res[0]);
    let min = res[0];
    for (let i = 0; i < N; i++) {
      if (min == A[i]) {
        console.log(i);
        break;
      }
    }
  }

  //   ;
}
function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let A = input[1].trim().split(" ").map(Number);
  basicMaths(N, A);
  // console.log(A);
}
if (process.env.USERNAME === "win10") {
  runProgram(`5
  1 6 8 2 4`);
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
