
function runProgram(input) {
    input = input.trim().split('\n'); 
    let N = +input[0];
   let arr1 = input[1].trim().split(" ").map(Number)
   arr1.sort((a,b) => a-b)
   let arr2 = input[2].trim().split(" ").map(Number)
   arr2.sort((a,b) => a-b)
   let arr  = arr1.concat(arr2)
   arr = arr.sort((a,b ) => a-b)
   console.log(arr.join(" "))  }
  if (process.env.USERNAME === "win10") {
    runProgram(`4
    1 5 7 9
    2 4 6 8`);
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