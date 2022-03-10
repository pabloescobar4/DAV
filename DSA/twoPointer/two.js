function two(N,K,arr){
    arr = arr.sort((a, b) => a - b)
    let left = 0;
    let right = arr.length-1;
    while(left < right){
        if(arr[left] + arr[right] == K){
            return "yes"
        }else if(arr[left] + arr[right] > K){
            right--
        }else if(arr[left] + arr[right] < K){
            left++
        }
    }
    return "no" 
}

function runProgram(input) {
    input = input.trim().split('\n'); 
    let N = +input[0];
    let arr = input[1].trim().split(' ').map(Number);
    let K = +input[2]
    console.log( two(N,K,arr));
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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