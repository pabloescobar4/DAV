function pairlessthan(n,arr,k){
let left = 0,right= n-1,sum = 0
while(left<right){
    if(arr[left] + arr[right] < k){
        sum += arr[left]+arr[right]
        return sum
    }
    if(arr[left] + arr[right] > k){
        right--
    }else{
        left++
    }
}
return -1
}
  
  function runProgram(input) {
    input = input.trim().split("\n");
    var testCases = +input[0]
  //   console.log(testCases)
      var line = 1;
      for (var i = 0; i < testCases; i++){
          var n = +input[line++]
          var arr = input[line++].trim().split(" ").map(Number)
          var k = +input[line++]
  console.log(pairlessthan(n, arr, k));

  
  
      }
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`2
  5
  1 2 3 4 5
  7
  3
  30 10 20
  15`);
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
      process.exit(0);
    });
  }