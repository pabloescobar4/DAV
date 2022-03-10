function TwoPointer(arr,k) {
    let left = 0;
     let right = 1;
     while(left < arr.length && right < arr.length) {
         if((  arr[right] - arr[left]) == k ) {
    return "Yes";
         }else if( arr[right] - arr[left] < k){
             right++
         } 
    else{
        left++
    }
}
return "No"
}
function runProgram(input) {
    input = input.trim().split('\n'); 
    let T = +input[0]
    let line = 1;
    for( let i = 1;i<=T;i++){
        let [N, K] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        // console.log(arr);
        console.log(TwoPointer(arr,K));
    }
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5   `);
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