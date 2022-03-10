function allTwice(N, str) {
 

  var obj = {};
  for (let i = 0; i < N; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  for (key in obj) {
    if (obj[key] === 1) {
      console.log(key);
    }
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  let T = +input[0];
  let line = 1;
  for (let i = 0; i < T; i++) {
    let N = +input[line++];
    let str = input[line++].trim().split(" ").map(Number);
    //    console.log(str);
    allTwice(N, str);
  }
}
if (process.env.USERNAME === "win10") {
  runProgram(`2
    1
    5
    5
    1 2 1 3 2`);
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
