function runProgram(input) {
    input = input.trim().split('\n'); 
    let [N, K] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);
    // console.log(arr);
    let sum1 = 0;let sum2 = 0;
    for(let i = 0; i < N; i++) {
    sum1 += arr[i];
    }
    for(let i = N; i < N*2; i++) {
        sum2 += arr[i];
        }
        let diff = Math.abs(sum1 - sum2);
if(diff < K){
console.log("Valid");
}else{
    console.log("Invalid");
}
 
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`3 4
    1 8 5 9 6 1`);
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