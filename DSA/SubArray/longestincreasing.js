// function longestIncreasing(N, arr){
//     let output = []
//     for( let i = 0;i<N;i++){
//         for( let j = i+1; j<N;j++){
     
//                 output.push(arr[j])
//                 console.log(output);
            
//         }
//     }
// }
// function runProgram(input) {
//     input = input.trim().split('\n'); 
//    let testcases = +input[0];
//    let line = 1;
//    for( let i = 0;i<testcases;i++){
//        let N = +input[line++];
//        let arr = input[line++].trim().split(" ").map(Number);
//     //    console.log(arr);
//     longestIncreasing(N, arr)
//    }
//   }
//   if (process.env.USERNAME === "win10") {
//     runProgram(`2
//     2
//     1 1
//     6
//     1 2 1 2 3 1
//     `);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0) ;
//     });
//   }
// let arr= [1, 2, 3]
// let N = arr.length
// let output = []
//     for( let i = 0;i<N;i++){
//         for( let j = i; j<N;j++){     
//                 output.push(arr.slice(i,j+1))
                
//             }
//         }

   
//       for( let i = 0;i<output.length;i++){
//        if(output[i] < output[i+1] ){

//        }
//       }




// Javascript implementation to find the length of
// longest increasing contiguous subarray

// function to find the length of longest increasing
// contiguous subarray
function lenOfLongIncSubArr(arr, n)
{
	// 'max' to store the length of longest
	// increasing subarray
	// 'len' to store the lengths of longest
	// increasing subarray at different
	// instants of time
	var max = 1, len = 1;
	

	for (var i=1; i<n; i++)	{

		if (arr[i] > arr[i-1])
			len++;
	
			else		{
	
			if (max < len){
				max = len;
            }
			len = 1;
		}
	}
		return max;
}


var arr = [1 ,2, 1, 2, 3, 1];
var n = arr.length;
console.log("Length = " + lenOfLongIncSubArr(arr, n));
