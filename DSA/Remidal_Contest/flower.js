function flowerBed(N,K,arr){
    let count = 0
    for( let i = 0;i<N;i++){
        if(arr[i] == 0 && arr[i +1] ==0 && arr[i +2] == 0){
            count++
        }
        else if(arr[0] == 0 && arr[1] == 0 ){
           count++
        } else if(arr[N-1] == 0 && arr[N-2] == 0){
            count++;
        }
        if(count == K){
            return "Yes"
        }
        else{
            return "No"
        }
    }  
}
function runProgram(input) {
    input = input.trim().split('\n'); 
    let t = +input[0];
    let line = 1;
    for(let i = 1;i<=t;i++) {
        let [N, K] = input[line++].trim().split(' ').map(Number);
        let arr = input[line++].trim().split(' ').map(Number);
        console.log(flowerBed(N,K,arr));
    }
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`5
    3 3
    0 1 1
    10 1
    0 1 0 0 1 0 0 1 0 0
    6 3
    1 0 1 0 0 1
    8 1
    1 1 1 0 1 1 0 1
    9 1
    0 1 1 1 1 1 0 0 0`);
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