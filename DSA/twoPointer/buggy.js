function oneThird(arr,arr2,N){

    // for(let i = 0;i<N;i++){
    //     if(arr[i] > arr2[i]){
    //         return false
    //     }
    // }
    arr = arr.split(" ").join("")
    arr = Number(arr)
    arr2 = arr2.split(" ").join("")
    arr2 = Number(arr2)
return arr2    

// if(arr >= arr2){
//    return "False"
// }else {
//     return "True";
// }

}
function runProgram(input) {
    input = input.split("\n");
    let TestCases = +input[0];
    let line = 1;
    for(let i = 0; i < TestCases;i++) {
        let arr= input[line++].trim().split(".").join(" ")
        let arr2= input[line++].trim().split(".").join(" ")
        let N = arr.length
  
        console.log(oneThird(arr,arr2,N));
  
    }
}
  if (process.env.USERNAME === "win10") {
    runProgram(`3
    2.0.1
    1.9.8
    12.0.1
    12.10.0
    1.1.10
    1.1.12`);
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