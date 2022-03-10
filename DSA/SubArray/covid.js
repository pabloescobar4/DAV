function runProgram(input) {    
let arr = input
//   arr = arr.split("").sort((a, b) =>a-b)
//   console.log(arr)
  let count = 0
  for (let i = 0; i < arr.length; i++){
      let array = ""
	  for (let j = i; j < arr.length; j++){
		 array+=arr[j]
            if((array.includes("a") )&& (array.includes("i")) && (array.includes("o")) && (array.includes("u") )){
                count++
            }    
    }
    
}
console.log(count)
 input.trim().split('\n'); 
   
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`dangerouscovid`);
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
 