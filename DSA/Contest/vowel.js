function findVowel(str){
    let count = 0
    let count2= 0
for(let i = 0; i< str.length; i++ ){
    if( (str[i] =="a")  ||(str[i] =="e")  ||   (str[i] =="i")  ||(str[i] =="o")  ||(str[i] =="u")){
        count++
    }else{
        count2++;
    }
}
console.log(count2);
}
function runProgram(input) {
    input = input.trim().split(''); 
    let str = input;
    // console.log(str[0]);   
    findVowel(str)
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`masaischool`);
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