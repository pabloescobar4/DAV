function CountPairs(n,k,arr) {
    let left = 0;
    let right = n-1;
    let count = 0;
    while(left < right) {
      if(arr[left] + arr[right] == k) {
        count++
      } else if(arr[left] + arr[right] > k) {
        right--
      } else {
        left++
      }
    }
    return count
  }
  
  function runProgram(input) {
    input = input.trim().split('\n'); 
    let [n, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    arr.sort((a,b) => (a-b))
    // console.log(arr);
console.log(    CountPairs(n,k,arr));
   
  }  
  if (process.env.USERNAME === "win10") {
    runProgram(`5 9
    3 0 6 2 7`);
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