// function output(n){
//     if(n < 2)
//     return n
//  var a= 0 , b=1 , c=1 ,d=a+b+c;
//  while(n-- > 2){
//      d =a +b +c 
//      a=b
//      b=c
//      c=d
//  }
//  return c
// }


// function runProgram(input){
//      var a = input.split("\n");
    
// let x = output(a[1])
//  console.log(x)
    
// }

// if (process.env.USERNAME === "win10") {
//     runProgram(`1
//     6`);
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

// // function runProgram(input) {
// //     input = input.trim().split('\n'); 
   
// //   }
  

// function tribonacci(signature,n){  
//     for (var i = 0; i < n-3; i++) { // iterate n times
//       signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
//     }
//     return signature.slice(0, n); //return trib - length of n
//   }
// var n1 = 0,  n2 = 1, next_num, i;  
// var num = parseInt (prompt (" Enter the limit for Fibonacci Series "));  
// document.write( "Fibonacci Series: ");  
// for ( i = 1; i <= num; i++)  
// {  console.log(" <br> " +  n1)  
//     next_num = n1 + n2;  
      
//     n1 = n2; 
//     n2 = next_num; 
// }

// function fibo( num)  {  
// var n1 = 0; 
// var n2 = 1;  
// var temp;  
// var i = 0;  
// for (i = 0; i < num; i++)  
// {  
// temp = n1 + n2; 
// n1 = n2; 
// n2 = temp; 
// }  
// return n2;  
// }  
// let num = 3
// console.log(fibo(num));

function tribonacci(x){ 
	if(x == 0) return 0; 
	if(x == 1) return 1; 
	if(x == 2) return 1; 

	return tribonacci(x-1) + tribonacci(x-2) + tribonacci(x-3); 
} 

console.log(tribonacci(5));