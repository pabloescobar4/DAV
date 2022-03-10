function corner(N,M,arr,sum){

}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let [N, M] = input[0].trim().split(" ").map(Number);
   let sum = 0;
    for( let i = 1;i<input.length;i++){
        let arr = input[i].trim().split(" ").map(Number)
        console.log(arr);
        sum += arr[0]+arr[N-1]
        // console.log(corner(N,M,arr,sum));
    }
    // console.log(sum);

   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`3 3
    1 2 7
    3 4 6
    5 6 10`);
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