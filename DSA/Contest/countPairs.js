function CountPairs(N,K,arr){
    let count = 0;
    for(let i= 0;i<N;i++){
        for(let j = i+1; j < N;j++){
            if(arr[i] + arr[j] == K){
                count++;
            }
        }
    }
    console.log(count);
}

function runProgram(input) {
    input = input.trim().split('\n'); 
    let [N, K] =  input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
//    console.log(N,K);
CountPairs(N,K,arr)
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`2 4
    2 2`);
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