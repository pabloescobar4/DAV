function nextGreater(N, arr){
    let a = 0,b = 1,array = [];
    while(a<N&& b< N){
        if(arr[a] < arr[b]){
            console.log( arr[b]);
        }else if(arr[a] < arr[b+1]){
             console.log( arr[b+1]);
        }
    }
}
function runProgram(input) {
    input = input.trim().split('\n'); 
    let  T = +input[0];
    let line = 1;
    for(let i = 1;i<=T;i++) {
        let N = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        // console.log(arr);
        nextGreater(N, arr);
    }
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`1
    4
    1 3 2 4`);
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