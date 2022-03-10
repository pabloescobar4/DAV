function name(arr,N){
    let count = 0;
    for(var i =0;i<arr.length;i++){
    if(arr === "masai"){
        count++;
    }
    return (arr + " "+  count)
    
    let countb = 0;
    if(arr === "school"){
            countb++
            
        }
return (arr + " " + countb);
    }       
}

function runProgram(input) {
    input = input.trim().split('\n'); 
    let N = +input[0];
    let line = 1;
    for(var i = 1;i<= N;i++){
        let arr = input[line++].trim().split("").join("")
        console.log(name(arr, N))
    }
   
  }

  if (process.env.USERNAME === "win10") {
    runProgram(`3
    masai
    school
    masai`);
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