function runProgram(input) {
    input = input.trim().split('\n'); 
   let [N, M] = input[0].trim().split(" ").map(Number);
   let arr = []
   for( let i = 1;i<input.length;i++){
       arr.push(input[i].trim().split(" ").map(Number))
    }
//  console.log(arr.length);
    let array = []
 for( let i = 0;i< arr.length;i++){
array = array.concat(arr[i])
 }
//  console.log(array);
let sum = 0
for( let i = 0;i< array.length;i++){
    if(array[i] % 3 == 0){
        sum +=array[i]
    }
}
console.log(sum);
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`2 3
    3 1 8
    2 6 0`);
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