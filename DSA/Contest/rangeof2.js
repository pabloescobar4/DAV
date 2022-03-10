function runProgram(input) {
   
    var [L, R] = input.trim().split(" ").map(Number)
    // console.log(L,R); 
for(let i =L; i <= R; i=i*2) {
console.log(i);
}
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`8 32`);
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