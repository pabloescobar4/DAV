function ans(arr){
	let obj ={}

	for (let i = 0; i < arr.length; i++){
		if(obj[arr[i]] === undefined){
			obj[arr[i]] =1
		}else{
			obj[arr[i]]++
		}
	}
	//console.log(obj)
	
	for(key in obj){
		if(obj[key]==1){
			console.log(key)
		}
	}
}
// let arr = [1,2,2,3,3]
// ans(arr)

function runProgram(input) {
	// Write code here
   input = input.split("\n")
  // console.log(input)
   let test = +input[0]
   let line = 1
   for (let i = 1; i <= test; i++){
	   let n = +input[line++]
	    let arr = input[line++].split(" ").map(Number)
	   ans(arr)
   }
  }
  if (process.env.USER === "dheerajmehta") {
	runProgram(`2
1
5
5
1 2 1 3 2`);
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
  
  