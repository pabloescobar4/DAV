function flatArr(ar) {
    let ans = []
    for(let i = 0; i < ar.length; i++) {
if(typeof ar[i] === "object") {
flatArr(ar[i]); 
}
else {
ans.push(ar[i]);
}
}
console.log(ans);
}

function runProgram(input) {
    input = input.trim().split('\n'); 
    let [n, M]  = input[0].trim().split(" ").map(Number)
    let ar = []
    let sum = 0
    for( let  i = 1;i<input.length;i++){
        ar.push(input[i].trim().split(" ").map(Number))
    }
    // flatArr(ar);
    array = ar
for(x in array) {
    if(array[x] instanceof Array) {
        array[x] = array[x].join(" ");
    }
}
var string = array.join(" ")
let str = string.trim().split(" ").map(Number)

for( let i = 0;i< str.length;i++){
    if(str[i] % 3 == 0 ){
        sum +=str[i]
    }
}
console.log(sum)

// console.log(ar);

   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`1 5
    3 6 1 75 81`);
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