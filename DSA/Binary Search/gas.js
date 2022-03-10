function gasStation(n, gas , cost){
    let petrol=0;
    let start=0; 
    let total=0; 
    for(let i=0;i<n;i++){
        petrol = petrol + gas[i]-cost[i];
        total = total + (gas[i]-cost[i]);
        if(petrol<0){
            start=i+1;
            petrol=0;
        }
    }
    if(total<0){
        start =-1;
    }
   return start;
}

function runProgram(input) {
    input = input.trim().split('\n'); 
   let N = +input[0]
   let gas = input[1].trim().split(" ").map(Number)
   let cost = input[2].trim().split(" ").map(Number)
   console.log(gasStation(N, gas , cost));
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`5
    1 2 3 4 5
    3 4 5 1 2`);
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