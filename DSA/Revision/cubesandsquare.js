function runProgram(input) {
  let [a, b] = input.trim().split(' ').map(Number)
//   console.log(a,b)
let sum1 = (a*a)+10
let sum2 = (b*b*b)+12
console.log(sum1+sum2)
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`2 3`);
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
      process.exit(0) ;
    });
  }