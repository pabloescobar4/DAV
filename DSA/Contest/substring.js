function runProgram(input) {

    var a = input.trim().split("")
    // console.log(a);
    var arr= ""
for(var i = 0;i < a.length; i++){
  for (var j = i+1;j<a.length;j++){
      for( var k = i; k< j; k++){
        
      }
      arr +=a[k]
      console.log(arr);
    }   
  }               
}

if (process.env.USERNAME === "win10") {
  runProgram(`thisracecarisgood`);
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
    process.exit(0);
  });
}