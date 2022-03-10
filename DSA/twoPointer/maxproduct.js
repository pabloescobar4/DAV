function max(N, arr){
 let result = arr[0] * arr[1]
    console.log(result);
}
function runProgram(input) {
    input = input.trim().split('\n'); 
    let T = +input[0];
    let line = 1;
    for(let  i = 1;i<= T;i++){
        let N = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)
        arr = arr.sort((a,b) => b- a)
        // console.log(arr);
        max(N, arr)
    }
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`3
    6 
    1 0 7 2 4 0
    5
    1 2 3 4 5
    2
    0 0`);
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