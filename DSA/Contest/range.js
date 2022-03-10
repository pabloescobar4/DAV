function runProgram(input) {
    var [n, k] = input.trim().split(' ').map(Number);
   //  console.log(n,k);
      
    for(var i = n;i<=k;i++) {
        if([i] % n == 0) {
            console.log(i);
        }
    }
     }
     if (process.env.USERNAME === "win10") {
       runProgram(`4 10`);
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