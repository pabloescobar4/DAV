function abhi(N,K,arr){
    let index = []
    let count = 0
    for( let i = 0;i<N;i++){
        if(arr[i] > K){
            index.push(i)
        }        
    }
    // console.log(index)
    for( let j = 0;j<index[1];j++){
        if(arr[j] <= K){
            count++
        }
    }
    console.log(count)
}
function revers(N,K ,arr){
    arr = arr.reverse()
    
  

}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let [N, K] = input[0].trim().split(" ").map(Number)
   let arr =input[1].trim().split(" ").map(Number)
//    arr = [...arr]
   console.log(arr)
// console.log( revers(N,K ,arr))
// abhi(N,K,arr)
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`9 6
    2 2 7 6 7 5 2 3 4
    `);

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