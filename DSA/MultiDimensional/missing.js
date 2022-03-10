
function runProgram(input) {
    // input = input.trim().split(' '); 
    let arr =input.trim().split(" ").map(Number)
arr.sort((a,b)=>(a-b))
let first = arr[0];
let last = arr[arr.length -1];
let sum = 0;
let sum_arr = 0
for(let i = first; i <= last; i++) {
sum+= i
}

for(let i = 0; i < arr.length; i++) {
  sum_arr += arr[i]
}
console.log(sum - sum_arr)
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`4 5 1 3`);
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