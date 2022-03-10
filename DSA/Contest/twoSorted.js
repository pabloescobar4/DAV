function twoSorted(N, arr1, arr2) {
let obj = {}
let obj2 = {}
for( let i = 0;i<N;i++){
    if( obj[arr1[i]] === undefined ){
        obj[arr1[i]] = 1;
    }else{
        obj[arr1[i]]++
    }
    if( obj2[arr2[i]] === undefined ){
        obj2[arr2[i]] = 1;
    }else{
        obj2[arr2[i]]++
    }
}
for( key in obj){
    if(obj[key] == obj2[key]){
        console.log(obj);
    }
}
}
function runProgram(input) {
  input = input.trim().split("\n");
  let t = +input[0],
    line = 1;
  for (let i = 0; i < t; i++) {
    let N = +input[line++];
    let arr1 = input[line++].trim().split(" ").map(Number);
    let arr2 = input[line++].trim().split(" ").map(Number);
    //    arr2 = arr2.sort((a,b) => a-b
    //    console.log(arr2);
    twoSorted(N, arr1, arr2);
    // console.log(intersect(arr1, arr2));
  }
}
if (process.env.USERNAME === "win10") {
  runProgram(`1
  6
  1 2 2 3 4 5
  4 4 3 2 1 1`);
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
    process.exit(0);
  });
}
