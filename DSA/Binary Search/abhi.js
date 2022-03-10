function array(arr,N,M){
    arr = arr.sort((a, b) => a-b)
let diff = N-M
    let sum1 = 0,sum2 = 0;
    for(let i =0;i<diff;i++){
    sum1 += arr[i]
    }
    arr = arr.sort((a, b) => b-a)
    for(let i =0;i<diff;i++){
        sum2 += arr[i]
    }
    console.log(sum2-sum1);
}

function runProgram(input) {
    input = input.trim().split('\n'); 
   let t = +input[0]
   let line = 1;
   for(let i = 0;i<t;i++){
       let [N, M ] = input[line++].trim().split(" ").map(Number)
       let arr = input[line++].trim().split(" ").map(Number)
       array(arr,N,M)
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