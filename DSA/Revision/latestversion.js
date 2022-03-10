function LatestVersion(str1, str2){
if(str1 > str2 ){
  return "Version 2 is the latest."
}else if( str1[0] > str2[0]){
  return "Version 2 is the latest."
}
else if( (str1[0] ==  str2[0] ) && (str1[1] > str2[1]) ){
  return "Version 2 is the latest."
}
else if( (str1[0] ==  str2[0] ) && (str1[1] == str2[1])  && (str1[2] > str2[2]) ){
  return "Version 2 is the latest."
}   else if( (str1[0] ==  str2[0] ) && (str1[1] == str2[1])  && (str1[2] == str2[2]) ){
  return "Both Versions are equal."
}

  return "Version 1 is the latest."

}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let str1 =  input[0].trim().split(".").map(Number)
   let str2 =  input[1].trim().split(".").map(Number)
//  console.log(str2);
console.log( LatestVersion(str1, str2));
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`3.2.0.11
    3.2.0.14`);
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