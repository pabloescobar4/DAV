function swap(){
    
}
function runProgram(input) {
    input = input.trim().split('\n'); 
    let t = +input[0]
    let line =1;
    for( let i = 0;i< t;i++){
        let [N , K] = input[line++].trim().split(" ").map(Number)
        let arr1 = input[line++].trim().split(" ").map(Number)
        let arr2 = input[line++].trim().split(" ").map(Number)
        // console.log(N)
    }
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`5
    2 1
    1 2
    3 4
    5 5
    5 5 6 6 5
    1 2 5 4 3
    5 3
    1 2 3 4 5
    10 9 10 10 9
    4 0
    2 2 4 3
    2 4 2 3
    4 4
    1 2 2 1
    4 4 5 4`);
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