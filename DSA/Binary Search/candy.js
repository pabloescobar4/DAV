function buyCandies(N,cost,arr){
    let expenses = 0
    let remaining = cost-expenses
    while(cost == expenses){
    for(let i = 0; i<N;i++){
        if(arr[i] <= cost ){
            remaining -= arr[i]
            expenses += arr[i]
        }
    }
}
return expenses
}

function runProgram(input) {
    input = input.trim().split('\n'); 
    let [N , cost] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    // console.log(cost);
    console.log(buyCandies(N,cost,arr));

  }
  if (process.env.USERNAME === "win10") {
    runProgram(`4 7
    2 3 6 7`);
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