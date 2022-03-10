function FlipMatrix(matrix){
    for (let i = 0; i < matrix.length; i++) {
       if(i % 2 ==1){
         console.log(matrix[i].reverse().join(" "));
       }else{
         console.log(matrix[i].join(" "));
       }
    }

}
function runProgram(input) {
    input = input.trim().split("\n");
    let [n, m] = input[0].trim().split(" ").map(Number);
    let matrix = [];
    let line = 1;
    for (let i = 0; i < n; i++) {
      matrix.push(input[line++].trim().split(" ").map(Number));
    }
    // console.log(matrix);
    FlipMatrix(matrix)
  }
  
  if (process.env.USERNAME === "win10") {
    runProgram(`4 2
    1 2
    3 4
    5 6
    7 8
    `);
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