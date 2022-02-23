// // function find(decimal_number)
// // {
// //     if (decimal_number == 0)
// //         return 0;
// //     else
// //         return ((decimal_number % 2) + 10 *
// //                 find(parseInt(decimal_number / 2)));
// // }

// // 		function runProgram(input) {
// // 			// Write code here
// // 		   input = input.split("\n")
// // 		   let test = +input[0]
// // 		  for (let i = 1; i < input.length; i++){
// // 			 console.log( find(input[i]))
// // 		  }
// // 		  }
// // 		  if (process.env.USER === "dheerajmehta") {
// // 			runProgram(`2
// // 15
// // 128`);
// // 		  } else {
// // 			process.stdin.resume();
// // 			process.stdin.setEncoding("ascii");
// // 			let read = "";
// // 			process.stdin.on("data", function (input) {
// // 			  read += input;
// // 			});
// // 			process.stdin.on("end", function () {
// // 			  read = read.replace(/\n$/, "");
// // 			  read = read.replace(/\n$/, "");
// // 			  runProgram(read);
// // 			});
// // 			process.on("SIGINT", function () {
// // 			  read = read.replace(/\n$/, "");
// // 			  runProgram(read);
// // 			  process.exit(0);
// // 			});
// // 		  }
		  
// function Duplicate (n,arr){
// 	// let arr = [1,2,3,3,4]
	 
// 	  let obj = {}
// 	   for(let i = 0; i <arr.length; i++) {
// 		 if(obj[arr[i]] === undefined){
// 			 obj[arr[i]] =1
// 		 }else{
// 			 obj[arr[i]]++
// 		 }
//                  if(arr[i]!==i+1){
//                       n = i+1;
//                   }
// 	   }

// 	   let ar = 0
// 	  //console.log(obj)
// 	   for(key in obj){
// 		 if(obj[key]>1){
// 			console.log(n,key)	
// 		 }
// 	   }
	 
// }

	 
// // console.log(Duplicate(5, ))


// //  let arr = [1,2,3,3,4]
// // let array = arr.sort((a,b) => b-a)
// //  let arr2 =[]
// //  let N = arr.length
// //  for(let i = 0; i < N; i++) {
// // 		arr2.push(i+1)
// // 	   }
// // 	   console.log(arr2)

 
// //  function stringDifference(N,arr, arr2){
// //     let str = [];
// //     for(let i = 0; i<N ;i++){
    
// //         if(arr2[i] != arr[i]){
// //           str.push(arr[i])
// //         }
// //     }
// // 	let ar =(str.sort((a,b) => b-a))
// //    console.log(ar)
// // }

// // (stringDifference(4,[4,3,3,2,1],[5,4,3,2,1]))



// function runProgram(input) {
// 	// Write code here
   
//    input = input.trim().split("\n");
//    //   console.log(input)
//    var testCases = +input[0];
//    //   console.log(testCases);
//    var line = 1;
//    for (var i = 0; i < testCases; i++) {
// 	 var n = +input[line++];
// 	 var arr = input[line++].trim().split(" ").map(Number);
// 	    (Duplicate(n, arr))
 
//    }
//   }
//   if (process.env.USER === "dheerajmehta") {
// 	runProgram(`3
// 	5
// 	1 2 3 3 4
// 	2
// 	1 1
// 	3
// 	1 2 2`);
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
  
  


			
var maxSubArray = function(nums) {

	var max = nums[0];
		var sum = 0;
		for (var i = 0; i < nums.length; i++) {
			sum += nums[i];
		
			if (sum > max) {
				max = sum;
			}
			if (sum < 0) {
				sum = 0;
			}
		}
		return max;
	};
	
console.log(maxSubArray( [-2,1,-3,4,-1,2,1,-5,4]));

// function sum(arr){
// 	let sum =0
// 	for(let i = 0;i<arr.length;i++){
// 		sum+=arr[i]
// 	}
// 	return sum
// }
