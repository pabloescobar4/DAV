
// function runProgram(input) {
// 	// Write code here
//    input = input.trim().split("\n")
//    let test = +input[0]
//    let arr = input[1].trim().split(" ").map(Number)
//   // console.log(test,arr)

// //    let arr = [-59,-36,-13, 1, -53, -92, -2, -96, -54, 75]
// // console.log((arr))
// let arr2 = arr.sort((a,b) => a-b)
// let arr1 =[]
// for (var i = 0; i < arr2.length; i++){
// 	for(var j = i+1; j < arr2.length;j++){
//     let a =arr2[i]-arr2[j]
//    let b = (Math.abs(a))
// 	arr1.push(b)
// 	}
	
// }
// console.log(Math.min(...arr1))



//   }
//   if (process.env.USER === "dheerajmehta") {
// 	runProgram(`10
// 	-59 -36 -13 1 -53 -92 -2 -96 -54 75`);
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
  
  
for(let i=0; i<s1.length(); i++)
{
    let temp = s1[i] - 97;
    arr1[temp]++;
}

for(let i=0; i<s2.length(); i++)
{
    let temp = s2[i] - 97;
    arr2[temp]++;
}

let count=0;

for(let i=0; i<26; i++)
{
    let x = Math.abs(arr1[i]-arr2[i]);
    count+=x;
}

return count;