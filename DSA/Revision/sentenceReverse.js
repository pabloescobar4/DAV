function runProgram(input) {
    let str = []
    let string = input.trim().split(" ");
    for( let i = string.length-1; i>=0; i--){
        str.push(string[i])
    }
   
    console.log(str.join(" "))
 
  
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`A Transformation in education`);
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