function canBeSorted(N,arr) {
    let flag = true;
    for(let i = 0;i<N;i++) {
        if(arr[i +1] - arr[i] != 1 )   {
         return "NO";
    }else{
       return "YES";
    }
 
}
}
function runProgram(input) {
    input = input.trim().split('\n'); 
    let N = +input[0];
    let arr = input[1].trim().split(' ').map(Number);
    // console.log(arr);
    console.log( canBeSorted(N,arr) );
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`15
    -1 0 1 2 3 4 5 7 8 11 10 13 12 14 15`);
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