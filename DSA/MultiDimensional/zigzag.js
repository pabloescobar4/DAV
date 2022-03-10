function goZigZag(arr,R,C){
    let str = ""
 for( let r = 0; r < R; r ++){
     if( r % 2 == 0){
         for ( let c = C-1;c>=0;c--){
             str+= arr[r][c]+" "
         }
     }else{
       for( let c = 0;c< C;c++){
        str+= arr[r][c]+" " 
       }
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
    goZigZag(arr,R,C)
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`5 5
    4 7 1 1 7
    8 9 9 6 1
    6 4 9 5 1
    7 7 4 7 7
    8 6 2 5 5`);
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