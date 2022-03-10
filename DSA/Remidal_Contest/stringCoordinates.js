function runProgram(input) {
    input = input.trim().split('\n'); 
   let N = +input[0]
   let string = input[1].trim().split("")
//    console.log(string)
let c1 = 0;
let c2 = 0;
for( let i = 0; i < N; i++){
if(string[i] == "u"){
    c1 = c1+1
}
if(string[i] == "l"){
    c2 = c2-1
}
if(string[i] == "r"){
    c2 = c2+1
}
if(string[i] == "d"){
    c1 = c1-1
}
}
console.log(c1, c2);
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`4
    lldd`);
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