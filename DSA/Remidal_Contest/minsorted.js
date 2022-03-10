function minSorted(arr, low, high){
    while(low < high){    
        let mid = Math.floor(low + (high - low)/2);
        if (arr[mid] == arr[high]){
            high--;
        } else if(arr[mid] > arr[high]){
            low = mid + 1;
        }else{
            high = mid;
        }
    }
    return arr[high];
}
function runProgram(input) {
    input = input.trim().split('\n'); 
   let N = +input[0]
   let arr = input[1].trim().split(" ").map(Number);
   let low = 0, high = N-1;
//    console.log(arr);
console.log(minSorted(arr, low, high));

}
  if (process.env.USERNAME === "win10") {
    runProgram(`10
    4 6 7 9 10 -1 0 1 2 3`);
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