function arraysum(N,arr){
    let sum = 0;
    for(let i = 0; i< N;i++){
        sum = sum + arr[i];
    }
    // console.log(sum);
    if(sum %2 == 0){
        console.log("YES");
    }else {
        console.log("NO");
    }
}

function runProgram(input) {
    input = input.trim().split('\n'); 
    let t =  +input[0];
    let line = 1;
    for(let i = 0; i< t; i++){
        let N = +input[line++];
        let arr =  input[line++].trim().split(" ").map(Number);
        // console.log(arr);
        arraysum(N,arr)
    }
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`2
    1
    2
    3
    1 2 3`);
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