function differentwaystosum(N){
    let res = 0
    let arr = []
     arr.length =10
    arr[0] =1, arr[1]= 1,arr[2] = 1, arr[3] = 2;
    // console.log(arr[3]);

    for( let i = 4;i<=N;i++){
  res =     arr[i] = arr[i-1]+ arr[i-3]+ arr[i-4]
}
console.log(res);
}
function runProgram(input) {
    let N  = +input;
    // console.log(N); 
    differentwaystosum(N)
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`5`);
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