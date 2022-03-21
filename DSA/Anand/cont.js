// // let arr = [1,2,3,4,5,6,7,8,9,1,2,4,2,3]


// function runProgram(input) {
// 	// Write code here
//    input = input.trim().split("\n")
//    let n = +input[0]
//    let arr = input[1].trim().split(" ").map(Number)

//   }
//   if (process.env.USER === "dheerajmehta") {
// 	runProgram(`8
// 	1 2 3 4 2 1 6 5`);
//   } else {
// 	process.stdin.resume();
// 	process.stdin.setEncoding("ascii");
// 	let read = "";
// 	process.stdin.on("data", function (input) {
// 	  read += input;
// 	});
// 	process.stdin.on("end", function () {
// 	  read = read.replace(/\n$/, "");
// 	  read = read.replace(/\n$/, "");
// 	  runProgram(read);
// 	});
// 	process.on("SIGINT", function () {
// 	  read = read.replace(/\n$/, "");
// 	  runProgram(read);
// 	  process.exit(0);
// 	});
//   }
  
  let arr = [1,2,3,4,5]
  let sum = 0
  let arr1 = []
for(let i=0; i<arr.length; i++){
	sum+= arr[i];
	arr1.push(sum)
	
}
console.log(arr1.join(" "))
