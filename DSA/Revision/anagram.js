function anagram (str1,str2){
    str1  = str1.trim().split("")
    let string1  = str1.sort()
    // console.log(string1);

    let string2 = str2.trim().split(" ");
    console.log(string2);
}
function runProgram(input) {
    input = input.trim().split('\n'); 
    let str1 = input[0]
    let str2  = input[1].trim().split("")
    let string2 = str2.split(" ");
    console.log(string2); 
    // anagram (str1,str2)
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`anagram
    nag a ram`);
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