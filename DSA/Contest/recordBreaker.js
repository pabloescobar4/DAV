function recordBreaker(arr,N){
    var max = arr[0];
    var max_count = 0;
    var min= arr[0]
    var min_count = 0;

for(var i = 0;i<N;i++){
    // console.log(arr[i]);
    if(arr[i] > max){
        max = arr[i]
        max_count++
    }else if( arr[i]  <min){
        min = arr[i];
        min_count = min_count+1;
    }
}
console.log(max_count, min_count);;
}

function runProgram(input) {
    input = input.trim().split('\n'); 
var testcases = +input[0]
var line = 1;
for(var i = 0;i<testcases;i++){
var N = +input[line++];
var arr = input[line++].trim().split(" ").map(Number);
// console.log(arr);
recordBreaker(arr,N);
}   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`2
    9
    10 5 20 20 4 5 2 25 1
    10
    3 4 21 36 10 28 35 5 24 42`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
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