function intersect(N,arr1,arr2){
    for(let i = 0;i< N;i++){
     for(let j = 0;j<N;j++){
       if(arr1[i]===arr2[j]){
        return arr1[i]
       }
     }
    }
}
function runProgram(input) {
    input = input.trim().split('\n'); 
    let N = +input[0];
    let arr1 = input[1].trim().split(" ").map(Number)
    let arr2 = input[2].trim().split(" ").map(Number)
   console.log(intersect(N,arr1,arr2))
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`3
    4 5 7
    9 2 5`);
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