function getAllSubstrings(str) {
//    console.log(str);
    var i, j, result = [];
  
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
        //    result += str.slice(i,j)+ " "
            result.push(str.slice(i, j));
        }
    }
    // return result
    // console.log(result);
    let left = 0,right = result.length-1;
    // for(let i = 0; i< result.length; i++){
    while(left >=0 && right <result.length){
        if(result[left] === result[right]){
            return result.length
        }
    }
// }
  }


function runProgram(input) {
    // input = input.trim().split('\n'); 
    let str = input
   console.log( getAllSubstrings(str));
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
      process.exit(0) ;
    });
  }