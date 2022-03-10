function nextGreater(N, arr){
    let max = Math.max(...arr);
    let str = ""
    // console.log(max);
    let currMax = 0;
    for(let i = 0;i < N;i++) {
        if(arr[i] < arr[i+1]){
            currMax = arr[i+1];
           str += currMax+" "
        }else if(arr[i] > arr[i+1]){
            str += max+" "
        }else{
            str += -1+" "
        }
    }
let result = Number(str.trim())
console.log(result);
}
function runProgram(input) {
    input = input.trim().split('\n'); 
    let t = +input[0];
    let line = 1;
    for(let i = 0;i< t;i++){
        let N = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number)
        // console.log(arr);
        nextGreater(N, arr)
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