
function runProgram(input) {
    input = input.trim().split('\n'); 
    let str1 = input[0].trim().split("");
    let str2 = input[01].trim().split("");
    // console.log(str2);
    let flag = false
    let N = str1.length
    for( let i = 0;i<N; i++ ) {
        if( str1[i]== str2[i] ){
           flag = true;
        }
    }
    if(flag){
        console.log("Yes");
    }else{
        console.log("No");
    }
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`amit
    mtia`);
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
