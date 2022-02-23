// function runProgram(input) {
//   // Write code here
//   count1 = 0;
//   count2 = 0;
//   input = input.split('');
//   for (var i = 0; i < input.length; i++){
// 	  if(input[i] =="("||input[i]=="["||input[i]=="{"){
// 		  count1++;
// 	  }
// 	  if(input[i] ==")"||input[i]=="}"||input[i]=="]"){
// 		  count2++
// 	  }
//   }
// if(count1 == count2){
// 	console.log("balanced")
// }else{
//     console.log("unbalanced")
// }
// }
// if (process.env.USER === 'dheerajmehta') {
//   runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding('ascii');
//   let read = '';
//   process.stdin.on('data', function (input) {
//     read += input;
//   });
//   process.stdin.on('end', function () {
//     read = read.replace(/\n$/, '');
//     read = read.replace(/\n$/, '');
//     runProgram(read);
//   });
//   process.on('SIGINT', function () {
//     read = read.replace(/\n$/, '');
//     runProgram(read);
//     process.exit(0);
//   });
// }







function runProgram(input) {
	// Write code here
	input = input.trim().split("\n");
    let testCases = Number(input[0]);

    let line = 1;
    
    for(let i=0; i<testCases; i++) {
        let str1 = input[line].split(".").map(Number);
        line++;
        let str2 = input[line].split(".").map(Number);
        line++;

        result(str1,str2);
    }


function result(str1,str2){
	let arr = str1
	let arr1 = str2
	
	if(arr[0]<arr1[0]&&arr[1]<arr1[1]&&arr[2]<arr1[2]){
		console.log("True")
	}else{
		console.log("False")
	}
	//console.log(arr,arr1)
}


  }
  if (process.env.USER === "dheerajmehta") {
	runProgram(`3
	2.0.1
	1.9.8
	12.0.1
	12.10.0
	1.1.10
	1.1.12`);
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
  
  