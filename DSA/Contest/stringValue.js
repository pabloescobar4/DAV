function stringValue(str){
    let letter = "0abcdefghijklmnopqrstuvwxyz"
    let sum =0
    for(let i = 0; i <str.length;i++){
        for(let j = 0;j<letter.length;j++){
                if(str[i] == letter[j]){
                    sum = sum +j;
                }
        }
    }
    console.log(sum);
}
function runProgram(input) {
    // input = input.trim().split('\n'); 
    let str = input.trim().split("")
    // str.split(" ")
    // console.log(str);
    stringValue(str)
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`aba`);
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