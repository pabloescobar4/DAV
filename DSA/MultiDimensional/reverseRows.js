function flip(arr){
    arr = arr.reverse().join(" ")
    return arr
}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let N = +input[0];
    for( let i = 1;i<input.length;i++){
        let arr = input[i].trim().split(" ").map(Number)
        // console.log(flip(arr));
        console.log(arr);
    }

   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`);
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