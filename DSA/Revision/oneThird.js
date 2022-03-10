function oneThird(N,arr){
  for(let i = 0;i<N;i++){
      let count = 0;
        for(let j = 0;j < N;j++){
            if(arr[i] === arr[j]){
                count++;
              }
              // console.log(count);
            }
            // return count;
            if(count > N/3){
                return arr[i]
             }else if(arr[i] === undefined){
               return ""
             } 
  
    }
}

function runProgram(input) {
    input = input.trim().split('\n'); 
    let N = +input[0];
    let arr = input[1].trim().split(' ').map(Number);
  //  console.log(oneThird(N,arr));
  //  oneThird(N,arr);
if  (oneThird(N,arr) == undefined){
  console.log("")
}else{
  console.log(oneThird(N,arr))
}
}

  if (process.env.USERNAME === "win10") {
    runProgram(`3
    8 6 4`);
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