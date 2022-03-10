function tomorrow(n,arr,k) {


    let max = 0;
    let sum = 0;
    for(let i = 0; i <=k-1; i++) {
        sum += arr[i];
    }
    if(max < sum) {
    max = sum;
    }
    for(let i = k; i <n; i++) {
        sum += arr[i];
        sum -= arr[i-k]
        if(max < sum) {
            max = sum
        }
    }
    max = max.toString()
 return max

}
function runProgram(input) {
    input = input.trim().split('\n'); 
     let T = +input[0];
     let line = 1;
     for(var i = 0;i<T; i++){
         let [n , k] = input[line++].trim().split(" ").map(Number)
         let arr = input[line++].trim().split(" ").map(Number)
        //  console.log(arr);
        console.log(tomorrow(n,arr,k));
     }
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`2
    4 1
    -1 2 1 -4
    3 1
    0 0 0`);
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