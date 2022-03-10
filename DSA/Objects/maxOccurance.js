function maxOccurance(arr,N){
    let obj = {};
    let str = ""
    for( let i = 0;i< N;i++){
        if(obj[arr[i]] == undefined){
            obj[arr[i]] =1
        }else{
            obj[arr[i]]++
        }
    }

// for( key in obj){
//     if(obj[key] == )
// }
}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let N  = +input[0]
   let arr = input[1].trim().split(" ").map(Number)
//    console.log(arr);
maxOccurance(arr,N)
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`5
    0 2 0 6 9`);
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