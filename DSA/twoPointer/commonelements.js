function commonElements(N1, N2,arr1,arr2){
let a1 = 0,a2 = 0,ans = [];

while(a1 < N1 && a2< N2){
    if( arr1[a1] == arr2[a2]  ){
        ans.push(arr1[a1])
        a1++;
        a2++;
    }else if(arr1[a1] > arr2[a2]){
        a2++
    }else{
        a1++
    }    
}
if(ans.length <1){
    return -1
}else{
    return ans.join(" ");
}
}

function runProgram(input) {
    input = input.trim().split('\n'); 
    let T = +input[0]
    let line = 1;
    for( let i = 0;i<T;i++){
        let N1 = input[line++]
        let arr1 = input[line++].trim().split(" ").map(Number)
        let N2 = +input[line++]
        let arr2 = input[line++].trim().split(" ").map(Number)
        // console.log(N1);
        console.log(commonElements(N1, N2,arr1,arr2));
    }
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`2
    6
    1 2 3 4 5 6
    3
    3 3 5
    4 
    1 2 3 4
    4 
    5 6 7 8`);
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