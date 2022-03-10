function runProgram(input) {
    input = input.trim().split('\n'); 
    let t = +input[0];
    let line = 1;
    for(var i = 1;i<=t;i++){
        let [N, K] = input[line++]
    }
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`1
    5 2
    3 4 0 2 7`);
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