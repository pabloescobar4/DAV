function binaryRecursive(arr){
    if (arr == 0)
        return 0;
    else
        return ((arr % 2) + 10 *
                binaryRecursive(parseInt(arr / 2)));
}
function runProgram(input) {
    input = input.trim().split('\n'); 
    let t = +input[0];
    let line = 1;
    for( let i = 1; i<= t; i++ ) {
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(binaryRecursive(arr));
    }   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`2
    15
    128`);
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