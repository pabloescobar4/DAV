function downToUp(arr,R,C){
    let str = ""
    for( let c = C-1;c >=0; c--){
    for( let r = 0;r <R;r++){
            str+= arr[r][c]+" "
        }
    }
    console.log(str);
}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let [R , C] = input[0].trim().split(' ').map(Number)
   let arr = []
   for( let i = 1;i<input.length;i++){
       arr.push(input[i].trim().split(' ').map(Number))
   }
   downToUp(arr,R,C);
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`4 3
    1 8 9
    2 7 10
    3 6 11
    4 5 12`);
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