


function stringwithparenthesis(input){
    let c1 = 0,c2= 0;
for(var i = 0;i<input.length; i++){
    if( (input[i] == "(") || (input[i] == "[")    || (input[i] == "{")     ){
        c1++;
    }
    if( (input[i] == ")") || (input[i] == "]")    || (input[i] == "}")     ){
        c2++;
    }
// return c2
}
// if(c1 + c2 % 2 != 0){
//     return "unbalanced"
// }
if(c1 == c2){
    return "balanced"
}
return "unbalanced";
}
function runProgram(input) {
    // input = input.trim().split('\n'); 
   
     input = input.split("")
     if(input.length == 1){
         console.log("unbalanced");
     }else{

         console.log( stringwithparenthesis(input));
     }
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`(((((((((())))))))))`);
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