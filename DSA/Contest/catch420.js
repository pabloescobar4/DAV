function runProgram(input) {

let flag = true;
for (let i = 0;i<input.length;i++) {
    if((input[i] == "4") && (input[i+1] == "2" )&& (input[i+2] == "0")){
        console.log("Caught");
        return
        }
        
    }
    console.log("Escaped");
}


  
  if (process.env.USERNAME === "win10") {
    runProgram(`9720`);
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