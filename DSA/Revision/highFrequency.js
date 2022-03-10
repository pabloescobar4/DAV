
    function mostFrequent(arr, n)    {

        arr.sort((a,b)=> a-b  );
        // console.log(arr);          
        let max_count = 1, res = arr[0];
        let curr_count = 1;
           
        for (let i = 1; i < n; i++)
        {
            if (arr[i] == arr[i - 1])
                curr_count++;
            else
            {
                if (curr_count > max_count){
                    max_count = curr_count;
                    res = arr[i - 1];
                }
                curr_count = 1;
            }
        }
       

        if (curr_count > max_count){
            max_count = curr_count;
            res = arr[n - 1];
        }
        return res;
    }
function runProgram(input) {
    input = input.trim().split('\n'); 
    let T = +input[0]
    let line = 1;
    for(let i = 1;i<=T;i++){
      let n = +input[line++];
      let arr = input[line++].trim().split(" ").map(Number);
      // console.log(arr,n); 
      console.log(mostFrequent(arr, n));

    }
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`2
    6
    1 4 4 4 5 3
    11
    1 2 3 4 5 4 3 2 1 3 4`);
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