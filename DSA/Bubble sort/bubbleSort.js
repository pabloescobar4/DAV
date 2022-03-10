function BubbleSort(N,arr){
    do {
        var isFinished = false;
        for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
    
        let temp = arr[i]; 
        arr[i] = arr[i + 1]; 
        arr[i + 1] = temp; 
        isFinished = true;
        }
        }
        } while(isFinished); 
        return arr.join(" ");
        }
        

function runProgram(input) {
    input = input.trim().split('\n'); 
    let N = +input[0]
    let arr = input[1].trim().split(" ").map(Number)
    // console.log(arr);
   console.log( BubbleSort(N,arr));
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`5
    3 5 0 9 8`);
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