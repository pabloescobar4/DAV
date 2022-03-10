
function subStringUnderCondition(string, count){
    let arr = []
    let N = string.length
    for( let i = 0;i<string.length;i++){
        if( string[0] == string[N-1]){
        count++
        // arr.push(count)
        // return arr;        
        return count
    }
}
}
function runProgram(input) {
    // input = input.trim().split('\n'); 
    let count = 0;
    let str = input
//    console.log(str);
for( let i = 0;i<str.length;i++){
    let string = ""
    for (let j = i;j<str.length;j++){
            string += str[j]
          console.log(subStringUnderCondition(string,count));;
    }
}

  }
  if (process.env.USERNAME === "win10") {
    runProgram(`abcab`);
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