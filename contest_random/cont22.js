function code(len, arr) {
	//   console.log(len, arr);
	
	let obj = {};
	
	for(let i=0; i<arr.length; i++) {
		if(obj[arr[i]] == undefined) {
			obj[Math.abs(arr[i])] = arr[i];
		}
	}
	
	let ans = [];
	arr = arr.map(num => Math.abs(num));
	arr.sort((a,b) => a-b);
	
	for(let i=0; i<arr.length; i++) {
		ans.push(obj[arr[i]]);
	}
	
	console.log(ans.join(" "));
	
	}
	
	function runProgram(input) {
	  input = input.trim().split("\n");
	  let testCases = Number(input[0]);
	
	  let line = 1;
	
	  for (let i = 0; i < testCases; i++) {
		let len = Number(input[line]);
		line++;
		let arr = input[line].trim().split(" ").map(Number);
		line++;
		code(len, arr);
	  }
	}
	
	if (process.env.USER === "dheerajmehta") {
	  runProgram(`2
	  5
	  1 2 3 4 5
	  3
	  7 8 9`);
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