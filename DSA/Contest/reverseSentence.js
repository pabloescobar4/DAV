function reverse(input) {
let str = ""
for(let i = input.length-1;i>= 0 ;i--) {
 str += input[i]+" "
}
console.log(str);
}
function runProgram(input) {
    input = input.trim().split(' '); 
    // let str = input.join(' ');
    reverse(input);
    // console.log(input);
    // console.log(str);
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`A Transformation in education`);
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