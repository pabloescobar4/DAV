function rotateMatrixAntiClockWise(mat, N) {
// console.log(mat);
let arr = []
for( let r = 0; r < N; r++){
  for( let c = 0; c< N; c++){
arr[c][r].push(mat[r][c])
  }
}
console.log(arr);
}
function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let line = 1;
  let mat = [];
  for (let i = 1; i < input.length; i++) {
    let matrix = input[line++].trim().split(" ").map(Number);
    mat.push(matrix);
  }
  rotateMatrixAntiClockWise(mat, N)
}
if (process.env.USERNAME === "win10") {
  runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
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
