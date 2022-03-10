
function runProgram(input) {
    input = input.trim().split('\n'); 
    let N = +input[0];
   let arr = input[1].trim().split(" ").map(Number)
//    console.log(arr[N-2])

let count = 0;
for( let i = 0;i< N;i++){    
     if( arr[i] > arr[i-1] && arr[i] > arr[i+1]){
        count++
    }
}
if(arr[0] > arr[1]) {
    count++
}
if ( arr[N-1] > arr[N-2]){
    count++
}
console.log(count)
}
  if (process.env.USERNAME === "win10") {
    runProgram(`12
    2 0 4 9 2 0 3 5 0 9 8 10`);
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