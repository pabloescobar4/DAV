function twoSum(N,K,arr){
    let left = 0;
    let right = N-1
    
// console.log(right);

    while(left <right){
 if(arr[left] + arr[right] == K){
     let ans = (left + " " +right);
return  ans;
 }   else if(arr[left] + arr[right] > K){
     right--;
 }else{
     left++;
 }

    }
let elsewhere= "Not Found"
return(elsewhere);

}
function runProgram(input) {
    input = input.trim().split('\n'); 
let  t  = +input[0]
let line = 1;
for(let i = 0;i<t;i++){
    var [N , K] = input[line++].trim().split(' ').map(Number);
    var arr = input[line++].trim().split(' ').map(Number);
    // console.log(arr);
    console.log(twoSum(N,K,arr));
}

  }
  if (process.env.USERNAME === "win10") {
    runProgram(`3
    4 9
    2 7 11 15
    5 10
    1 2 3 5 5
    2 100
    48 49`);
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



