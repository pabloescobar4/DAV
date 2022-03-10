function toBinary(N){
    let binary = N.toString(2)
    let count = 0;
    for( let i = 0;i<binary.length;i++){
        if(binary[i] == 1){
            count++
        }
    }
    return count
}
function runProgram(input) {
    input = input.trim().split('\n'); 
    let Test = +input[0];
    let line = 1;
    for( let i = 0;i<Test;i++ ){
        let N = +input[line++]
        console.log( toBinary(N));
    }   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`4
    1
    3
    7
    6
    `);
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