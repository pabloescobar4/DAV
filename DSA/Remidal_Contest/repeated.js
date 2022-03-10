function repeated(N, arr){
    let str = "";
 for ( let i = 0;i < N;i++){
     if(arr[i] == arr[i+1]){
         str += arr[i]
         return Number(str)
     }
 }
    
}
function missing(N,arr){
return Number(arr[N-1]+1)
}

function runProgram(input) {
    input = input.trim().split('\n'); 
   let t = +input[0];
   let line = 1;
   for ( let i = 1;i<=t; i++){
       let N = +input[line++];
       let arr = input[line++].trim().split(" ").map(Number);
       arr = arr.sort((a, b) => a-b)
    //    console.log(arr);
    // console.log(N);
    console.log( missing(N,arr) +" " + (repeated(N, arr)) );
    
   }
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`3
    5
    1 2 3 3 4
    2
    1 1
    3
    1 2 2`);
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