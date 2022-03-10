function FindMaximum(N, arr){
let left = 0;
let right = arr.length-1;
let max = 0; 
let curr = 0;
while(left < right){
    (arr[left] * arr[right] == curr)
        if(curr  > max){
            max = curr
          
        }
   if(arr[left] * arr[right]  < curr){
       left++
   } else{
       right++
   }    
}
return max
}

function runProgram(input) {
    input = input.trim().split('\n'); 
    let T = +input[0];
    let line = 1;

    for(let  i = 1;i<= T;i++){
        let N = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)
        arr = arr.sort((a,b) => a- b)
        // let max =  Math.abs(arr[0] * arr[1])
        FindMaximum(N, arr)
        console.log(max);
        // max(N, arr)
    }   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`2
    3
    -3 0 -2
    4
    4 5 -1 2`);
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