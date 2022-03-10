function seperation(N,arr,querry){
    let array = []
    if(querry % 2== 0){
    for( let i = 0; i< N;i++){
        if(arr[i] % 2 != 0){
            array.push(arr[i])
        }    else{
            array.push(arr[i])
        }
       }
    }
    if(querry % 2== 1){
        for( let i = 0; i< N;i++){
            if(arr[i] % 2 != 0){
                array.push(arr[i])
            }    else{
                array.push(arr[i])
            }
           }
        }
        console.log(array);
}

function runProgram(input) {
    input = input.trim().split('\n'); 
    let t = +input[0],line = 1;
    for(let i = 1;i<= t;i++){
        let N =+input[line++]
        let arr = input[line++].trim().split(" ").map(Number)
        let querry = +input[line++]
        // console.log(N);
        seperation(N,arr,querry)
    }
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`2
    6
    1 3 5 2 7 4
    1
    6 
    1 3 5 2 7 4
    2`);
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