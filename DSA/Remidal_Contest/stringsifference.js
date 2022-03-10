function stringDifference(N,arr, arr2){
    let str = "";
    for(let i = 0; i<N ;i++){
    
        if(arr[i] != arr2[i]){
          str += arr[i]
        }
    }
    return str
}

function runProgram(input) {
    input = input.trim().split('\n'); 
   let arr = input[0].trim().split("")
   let arr2 = input[1].trim().split("")
//    console.log(arr2);
let N = arr.length;
console.log(stringDifference(N,arr, arr2));
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`ABCX
    ABCD`);
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