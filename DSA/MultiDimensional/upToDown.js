function downToUp(arr,R,C){
    let str = ""
    for( let c = C-1;c>=0;c--){
            for( let r = 0;r < R; r++){
            str+= arr[r] [c] +" "
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
    runProgram(`4 8
    7 51 88 46 99 93 78 17
    67 45 60 59 27 24 76 60
    24 52 38 38 6 56 45 49
    98 48 58 97 34 48 32 464`);
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