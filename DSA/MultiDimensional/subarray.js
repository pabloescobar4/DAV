function Subarray(arr,N,M){
    let count = 0
    for(let i = 0; i < N; i++){
    let sum = 0;
    for(let j = i; j < N; j++)    {     
  
        sum += arr[j];              
        if (sum === M){
            count++;
        }
    }
}
if(count > 0){
    return "Yes"
}else{
    return "No"
}
}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let t = +input[0]
   let line = 1;
   for(let i = 0;i<t;i++){
       let [N, M] = input[line++].trim().split(" ").map(Number)
       let arr = input[line++].trim().split(" ").map(Number)
    //    console.log(arr);.
    console.log( Subarray(arr,N,M));
   }
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`3
    5 3
    1 2 1 3 4
    4 5
    1 2 1 3
    3 2
    1 2 1`);
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