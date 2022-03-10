function  fib(n){  
    let f = []
    let i;
    f[0] = 0;
    f[1] = 1;
    for (i = 2; i <= n; i++)    {   
        f[i] = f[i-1] + f[i-2];
    }
    return f[n];
}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let N = +input;
//    console.log(N);
console.log( fib(N));
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`50`);
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