function findSum(arr, N) {
    if (N <= 0){
           return 0;
    }
    return (findSum(arr, N - 1) + arr[N - 1]);
}
function runProgram(input) {
    input = input.trim().split('\n'); 
    let test = +input[0]
    let line = 1;
    for( let i = 1;i<=test;i++){
        let N = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)
        // console.log(arr);
 
        console.log(findSum(arr,N));
    }
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`3
    5
    6 3 8 2 -4
    5
    -10 -7 10 2 -2
    5
    -4 -5 6 -3 9`);
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
