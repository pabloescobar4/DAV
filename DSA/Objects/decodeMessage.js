function decodeMessage(str){
    for( let i = 0;i< str.length;i++){
        let ss = {}
        for( let j = i;j< str.length;j++){
            ss += ss[str[j]] 
            console.log(ss)
        }
    }
}
function runProgram(input) {

 let str = input;
 let obj = {}
 decodeMessage(str)
 for( let i = 0;i< str.length;i++){
     if(obj[str[i]] === undefined){
         obj[str[i]] = 1
     }else{
         obj[str[i]]++
     }
 }
 let a = []
//  console.log(obj)
for(key in obj){
    // if(obj[key] < obj[key+1]){
     a.push(obj[key])   
    }
//   a = a.sort((a, b) => b-a)
//   console.log(Math.max(...a))
// }
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`ATTCGGGA`);
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