function array(n, m, arr){
let max = Math.max(...arr);
let min = Math.min(...arr);
let sum = 0;
for(let i = m-1;i<n;i++){
    sum += arr[i]
}
let maxSum = sum -min
let minSum = sum-max;
console.log(maxSum - minSum);
}

function runProgram(input) {
    input = input.trim().split('\n'); 
    let t = +input[0];
    let line = 1;
    for(let i = 0;i<t;i++){
        let [n, m] = input[line++].trim().split(" ").map(Number)
        let arr =  input[line++].trim().split(" ").map(Number)
        arr.sort((a,b) => a-b)
        array(n, m, arr)
   }
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`1
    5 1
    1 2 3 4 5`);
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