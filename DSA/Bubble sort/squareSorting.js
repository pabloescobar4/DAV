function squareSorting(N,arr){
    let flag = false;
  for( let j = 0;j< N;j++){
    for( let i = 0;i< N-j-1;i++){    
        if(arr[i]**2 > arr[i+1]**2 ){
            let result = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = result
        }
        }
    }
return arr.join(" ")    
}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let T = +input[0];
   let line = 1;
   for( let i = 0;i< T;i++){
       let N = +input[line++];
       let arr = input[line++].trim().split(" ").map(Number);
    //    arr = arr.sort((a,b) => a-b)
    //    console.log(arr);
    console.log( squareSorting(N,arr));
   }
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`1
    5
    -2 3 1 -4 6
    `);
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