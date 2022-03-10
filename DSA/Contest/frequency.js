function frequency(arr,left,right,querry) {
    let count = 0;
    // console.log(arr);
for(let  j=left-1 ;j<right;j++){
if(arr[j] === querry){
    count++;
}
}
return count;
}
function runProgram(input) {
    input = input.trim().split('\n'); 
    let [N, Q ] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    let line = 2;    
    for(let i =1;i<=Q;i++){
        let [left, right, querry] = input[line++].trim().split(" ").map(Number)
        // console.log(querry);
        console.log(frequency(arr,left,right,querry));     
    }   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`6 2
    1 5 3 2 3 2 
    3 6 2
    4 4 2
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


// let arr =["h: 4", "b: 2", "c: 2",   "d: 1", "e: 2", "a: 2",    "f: 1", "g: 1"]
// let [q, w , e, r, t, y, u, i]= arr;
// console.log(q[0]);
