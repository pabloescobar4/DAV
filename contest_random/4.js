// let arr = [3,0,6,2,7]
// let k =9



function runProgram(input) {
	// Write code here
   input = input.trim().split("\n")
   let line1 = input[0].trim().split(" ").map(Number)
   let arr = input[1].trim().split(" ").map(Number)
   let n = +line1[0]
   let k = +line1[1]

   let count=0
for (var i = 0; i < arr.length; i++){
	for (var j = i; j < arr.length; j++){
     if (arr[i]+arr[j]==k){
		 count++
	 }
}}
console.log(count) 
  // console.log(arr,n,k)
  }
  if (process.env.USER === "dheerajmehta") {
	runProgram(`5 9
	3 0 6 2 7`);
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
  
  function runProgram(input) {
	  // Write code here
	  input = input.trim().split("\n")
   let line1 = +input[0]
   let arr = input[1].trim().split(" ").map(Number)
   //console.log(line1,arr)
   let sort = arr.sort((a, b) => (a-b))
   console.log(sort[0])
	}
	if (process.env.USER === "dheerajmehta") {
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
		process.exit(0);
	  });
	}
	let str = "abcde"
	let str2 = "abde"

	for(let i = 0; i < str.length;i++){
		if(str[i]!==str2[i]){
			console.log(str2[i])
		}

	}
	