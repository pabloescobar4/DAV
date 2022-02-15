function find(decimal_number)
{
    if (decimal_number == 0)
        return 0;
    else
        return ((decimal_number % 2) + 10 *
                find(parseInt(decimal_number / 2)));
}

		function runProgram(input) {
			// Write code here
		   input = input.split("\n")
		   let test = +input[0]
		  for (let i = 1; i < input.length; i++){
			 console.log( find(input[i]))
		  }
		  }
		  if (process.env.USER === "dheerajmehta") {
			runProgram(`2
15
128`);
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
		  
		  
 