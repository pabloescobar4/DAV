function runProgram(input) {
  input = input.trim().split("\n");
  let str1 = input[0].trim().split("");
  let str2 = input[1].trim().split("");
  let count = 0;
  let flag = "Yes";
  str2 = str2.sort();
  str1 = str1.sort();
  //   console.log(str2);
  for (let i = 0; i < str1.length; i++) {
    // console.log(str1[i]);
    if (str1[i] != str2[i]) {
      flag = "No";
    }
  }
  console.log(flag);
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
    process.exit(0);
  });
}
