function searchsorted(arr,N,M){
    for( let i = 0; i< N; i++){
        if(arr[i] == M){
            return i
        }
    }
    return -1
}
function runProgram(input) {
    input = input.trim().split('\n'); 
    let [N, M] = input[0].trim().split(" ").map(Number);
    let arr =  input[1].trim().split(" ").map(Number)
    // console.log(arr);
    console.log(searchsorted(arr,N,M));

  }
  if (process.env.USERNAME === "win10") {
    runProgram(`6 6
    3 4 7 9 1 2`);
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