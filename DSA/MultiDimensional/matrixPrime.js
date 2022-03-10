function matrixPrime(N, M,arr){
    let array  = []
    for( let r = 0;r < N; r++){
    for( let c = 0; c< M ;c++){
        array.push(arr[r][c])
    }
}
let c = 0
for( let i = 0;i< array.length;i++){
    if(checkPrime(array[i])){
        c++
    }
}
console.log(c);
  function checkPrime(num){
    let count = 0;
    for( let i = 0;i<=num;i++){
        if(num % i== 0){
            count++
        }
    }
    if(count == 2){
        return true;
    }else{
        return false
    }
}
}

function runProgram(input) {
    input = input.trim().split('\n'); 
    let [N , M] = input[0].trim().split(' ').map(Number)
    let arr = []
    for( let i = 1;i<input.length;i++){
        arr.push(input[i].trim().split(' ').map(Number))
    }
    // console.log(arr);
    matrixPrime(N, M,arr)
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`3 3
    1 2 3 
    4 5 6
    7 8 9`);
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