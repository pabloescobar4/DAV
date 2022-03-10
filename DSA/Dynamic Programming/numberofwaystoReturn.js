function numberOfWaysToReturn(N,arr){
    if(N== 0){
      return 1;
    }else if(N < 0){
      return 0;
    }else if(arr[N] != -1){
      return arr[N]
    }else {
      return arr[N] =  numberOfWaysToReturn(N-3,arr)+ numberOfWaysToReturn(N-2,arr)+ numberOfWaysToReturn(N-1,arr)
    }
}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let N = +input;
   let arr = new Array(N+1).fill(-1);
  //  console.log(arr);
  console.log(numberOfWaysToReturn(N,arr));
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`10`);
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