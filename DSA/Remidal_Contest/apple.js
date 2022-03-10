 function a(n,w,array){
    let weight = 0
    for (let i = 0; i < n;i++) {
 let ab = w
     weight += array[i];
     if (weight > ab){

         return i

     }
    }
    return n
 
 }

function runProgram(input) {
    input = input.trim().split('\n'); 
   let [n ,w] = input[0].trim().split(" ").map(Number)
   let array = input[1].trim().split(" ").map(Number)
   array.sort((a,b) =>a-b)
console.log( a(n,w,array));

}
  if (process.env.USERNAME === "win10") {
    runProgram(`4 20
    3 10 4 4 `);
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