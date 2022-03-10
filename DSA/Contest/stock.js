function stock(N, flour, rice, sugar, pulse, bread, milk, oil){
var output = 0;
output = N*(
    (flour*550)+    (rice * 240)+    (sugar * 84)+    (pulse * 53* 3)+    (bread * 80)+    (milk * 32*5)+    (oil * 126*2))
return output
}

function runProgram(input) {
    input = input.trim().split('\n'); 
    let N = +input[0]
     let [flour, rice, sugar, pulse,bread, milk , oil] = input[1].trim().split(" ").map(Number)
console.log( stock(N, flour, rice, sugar, pulse, bread, milk, oil) );
  
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`4
    0 1 1 1 0 0 1`);
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