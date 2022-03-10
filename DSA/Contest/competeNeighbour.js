function competeWithNeighbour(n, arr){
  count = 0;
    for(var i = 0; i <n; i++) {
      if((arr[i] > arr[i + 1]) && (arr[i] > arr[i -1] ))
        count++
      }
        if(arr[0] > arr[1]) {
        count++
          }if (arr[arr.length-1] > arr[arr.length - 2]){
         count++; 
        }
 
     
  console.log(count);
   


    //write code here
}
function runProgram(input) {
    input = input.trim().split('\n'); 
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number)
    // console.log(N,arr);
    competeWithNeighbour(n, arr)
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`8
    1 2 3 4 2 1 6 5`);
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