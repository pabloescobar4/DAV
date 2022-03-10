function implementation(a,b, arr){
    for(let i = 0; i< arr.length; i++) {
        if((a % i ==0)  || (b % i ==0)){
           console.log(i);
        }
    }
}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let t = +input[0];
   let line = 1;
   for( let i = 1; i<= t; i++ ) {
       let arr = input[line++].trim().split(" ").map(Number);
       let [a, b] = arr
        implementation(a,b, arr)
   }
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`2
    6 9
    2 25`);
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