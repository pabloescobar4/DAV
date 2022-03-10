function answerQuerries(N,M,arr1,arr2){
    for ( let i = 0; i< N;i++){
    if(arr1.includes(arr2[i])){
        console.log("Yes");
        // console.log(arr2[i]);
    }    else{
        console.log("No");
        break;
    }
    }
}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let N = +input[0]
   let arr1= input[1].trim().split(" ").map(Number)
   let M = +input[2]
   let arr2  =  input[3].trim().split(" ").map(Number)
//    console.log(arr2);
answerQuerries(N,M,arr1,arr2);
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`5
    1 2 3 4 5
    3
    3 5 7`);
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