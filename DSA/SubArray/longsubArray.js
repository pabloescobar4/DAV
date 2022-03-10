function longSubArray(N,arr){
    let count = 1,max = 1
    for( let i = 1;i<N;i++ ){
        if(arr[i] > arr[i-1]){
            count++
        }   else {
            if(max < count){
                max = count
            }
            count = 1
        }
    }
    return max
}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let testcases = +input[0]
   let line = 1;
   for( let i = 1;i<=testcases;i++){
       let N = +input[line++]
       let arr = input[line++].trim().split(" ").map(Number)
       console.log( longSubArray(N,arr));

   }
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`2
    2
    1 1
    6
    1 2 1 2 3 1
    `);
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
