function battleOddEven(arr,N){
    let oddSum = 0;
    let evenSum = 0;
        for(var i = 0; i < N;i++){
            if(arr[i] % 2 == 0){
                evenSum += arr[i]
            }else{
                oddSum += arr[i]
            }
    }
    // console.log(oddSum, evenSum
    if(evenSum >= oddSum){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let N = +input[0];
   let arr = input[1].trim().split(' ').map(Number)
//    console.log(arr);
battleOddEven(arr,N)
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`4
    1 2 3 4`);
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