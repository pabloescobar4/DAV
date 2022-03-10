function root(X,Y){

    var a = Math.pow(Y, 1/X)
return Math.ceil(a)
}

// console.log(root(5,15625));
function runProgram(input) {
    input = input.trim().split('\n'); 
let N = +input[0];
let line = 1;
for(var i = 0;i<N;i++){
    let [X, Y] = input[line++].trim().split(" ").map(Number);
    console.log((root(X,Y)));
}
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`3
2 9
3 1000000000
3 126`);
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


