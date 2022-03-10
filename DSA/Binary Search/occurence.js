function occurence(arr,low,high,K){
    if( low> high){
      return -1}
        let mid = (low + Math.floor((high - low) /2))
        if(arr[mid] == K){
           return mid
        }
        if(arr[mid] > K){
      return occurence(arr,low,mid-1,K)
        }
        return occurence(arr,mid+1,high,K)
      }
function count(arr,N,K){
  let x = occurence(arr,0,N-1,K)
  if(x == -1){
    return 0
  }
  let count = 1;
  let left = x-1
  while(left >=0 && arr[left ]==K){
    count++,left--
  }
  let right = x+1
  while(right<N && arr[right] == K){
    count++,right++
  }
  return count
}

function runProgram(input) {
  input = input.trim().split('\n'); 
  let  [ N,K]= input[0].trim().split(" ").map(Number)
  let arr = input[1].trim().split(" ").map(Number)
  // console.log(arr);
  // console.log(occurence(N,K,arr));
  console.log(count(arr,N,K));
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`6 3
    2 3 3 3 3 9`);
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