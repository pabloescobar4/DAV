function runProgram(input) {
    input = input.trim().split('\n'); 
    let N = +input[0]
    let arr = input[1].trim().split(" ").map(Number)
    let sum = 0;
    for(let i = 0;i <N;i = i+2){
        sum += arr[i]
    }
    console.log(sum);
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`7
    4 5 5 5 6 6 7`);
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