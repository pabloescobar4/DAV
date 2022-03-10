function subArrayProblem(N,arr){
    let count = 0;
    for( let i = 0;i<N;i++){
        let sum = 0;
        for( let j = i;j<N;j++){
            sum += arr[j]
            if(sum% 2== 0){
                count++
            }
        }
    }
    console.log(count);
}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let N = +input[0]
   let arr = input[1].trim().split(" ").map(Number)
//    console.log(arr);
subArrayProblem(N,arr)
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`5
    2 5 4 4 4`);
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