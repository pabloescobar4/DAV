function runProgram(input) {
    input = input.trim().split("\n");
    let [N, M]= input[0].trim().split(" ").map(Number);
    let line=1;  
    for(let i=0; i <N; i++){
      let matrix= input[line++].trim().split(" ").map(Number);
        if(line % 2==0){
           console.log(matrix.join(" "))
        }else{
          console.log(matrix.reverse().join(" "))
        }
    }    
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
    process.stdin.on("matrix", function (input) {
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