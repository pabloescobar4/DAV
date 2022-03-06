// // let x =5
// // let y= 1
// // let arr = [1,2,3,4,5]


// const minSum = (arr,x,y) => {



// 	arr.sort((a,b) => a-b)
// 	let sum1 = 0
// 	let sum2 =0
// 	for (let i = 0; i < (x-y); i++){
// 		sum1+=arr[i]
// 	}
// 	arr.sort((a,b) => b-a)
	
// 	for (let i = 0; i < (x-y); i++){
// 		sum2+=arr[i]
// 	}
// 	console.log(sum2-sum1)
// }

// function runProgram(input) {
// 	// Write code here
// 	input = input.trim().split("\n");
// 	    let testCases = Number(input[0]);
	
// 	    let line = 1;
		
// 	    for(let i=0; i<testCases; i++) {
// 			let[ N,M] = input[line++].split(" ").map(Number)
// 	        let str1 = input[line].split(" ").map(Number);
// 	        line++;
	     
	
// 	       minSum(str1,N,M);
// 		//    console.log(str1)
// 	    }
	
// 	//   // console.log(str, test)
//   }
//   if (process.env.USER === "dheerajmehta") {
// 	runProgram(`1
// 	5 1
// 	1 2 3 4 5`);
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
  
  

// function runProgram(input) {
// 	// Write code here
//    input= input.trim().split("\n")

//    let test = input[0].trim().split(" ").map(Number)

//    let n = +test[0]
//    let m = +test[1]
//    let arr = input[1].trim().split(" ").map(Number)
//   // console.log(n,m,arr)
// let count = 0

//   for (let i = 0; i < n; i++){
// 	  if(arr[i]==m){
// 		 count+= i
// 	  }
	  
//   }
// if(count>0){
// 	console.log(count)
// }else{
// 	console.log(-1)
// }
//   }
//   if (process.env.USER === "dheerajmehta") {
// 	runProgram(`6 6
// 3 4 7 9 1 2`);
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
  


//   let arr = "dangerouscovid"
// //   arr = arr.split("").sort((a, b) =>a-b)
// //   console.log(arr)
//   let count = 0


//   for (let i = 0; i < arr.length; i++){
// 	  let array = ""
// 	  for (let j = i; j < arr.length; j++){
// 		 array+=(arr[j])
// 		if(array.includes("a")&&array.includes("e")&&array.includes("i")&&array.includes("o")&&array.includes("u")){
// 			count++
// 		}
	 
//   }

//   }
 
// 	console.log(count)
//   }
  
//   console.log(count)
// var x = 1
// var y = 0
// if(x){
// 	console.log(x)
// }
// if(y){
// 	console.log(y)
// }

// // for (let i = 0; i < 10; i++){
// // 	setTimeout(function(){
// // 		console.log(i)
// // 	})
// // }

// // const a = {x: 2, y: 3}
// // const b = a
// // b.x = 3

// // console.log(b)
// // console.log(a)

// let a =10
// var a = 20
// console.log(a)

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length >= 5);

// console.log(result);

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array4 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2,array4);
// console.log(array3)

// const ratings = [5, 4, 5];
// let sum = 0;

// const sumFunction = (a, b) => a + b;

// ratings.forEach( (rating) => {
//   sum =  sumFunction(sum, rating);
// });

// console.log(sum);

// let a = 4
// let b = 2



function runProgram(input) {
    // Write code here
   let a = +input[0]
   for (let i = 1; i <=a;i++){
 
    for (let j = 1; j <=a;j++){
      let arr = [];
    arr.push(i,j)
   
  if(i!==j&&i<j){
    console.log(arr.sort().join(" "))
  }
  
    }
  }
  }
  if (process.env.USER === "dheerajmehta") {
    runProgram(`4 2`);
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
  
  