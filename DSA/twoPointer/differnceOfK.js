function differenceOfK(N,K, arr){
let left = 0,right = N-1;
while( left < right) {
    if( arr[right] - arr[left] == K   ){
        return "Yes"
    }else if ( arr[right] - arr[left] > K){
        left--
    }else{
        right++
    }
}return "No"
}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let t = +input[0]
   let line = 1;
   for( let i = 0;i< t; i++){
       let [N,K] = input[line++].trim().split(' ').map(Number)
       let arr = input[line++].trim().split(' ').map(Number)
    arr = arr.sort((a, b) => a-b)
    //    console.log(arr);
    console.log(differenceOfK(N,K, arr));
   }
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5 `);
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