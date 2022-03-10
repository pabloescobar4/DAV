// function findPrime( N){
//       if(N == 1 || N == 0) 
//       return false;
//       for(var i = 2; i < N; i++)      {       
//         if(N % i == 0) return false;
//       }   
//       return true;
// }
 
// function runProgram(input) {

//    let N=+input;
// for(var i = 1; i <= N; i++){
//     if(findPrime(i)) {
//       console.log( i );
//     }
// }
//   }
//   if (process.env.USERNAME === "win10") {
//     runProgram(`5`);
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


// // function findPrime( n)
// // {
// //       // since 0 and 1 is not prime return false.
// //       if(n == 1 || n == 0) return false;
   
// //       // Run a loop from 2 to n-1
// //       for(var i = 2; i < n; i++)
// //       {
       
// //         // if the number is divisible by i, then n is not a prime number.
// //         if(n % i == 0) return false;
// //       }
// //       // otherwise, n is prime number.
// //       return true;
// // }
 
 
// // Driver code
// // var N = 5;
 
// // // check for every number from 1 to N
// //   for(var i = 1; i <= N; i++)
// //   {
// //       // check if current number is prime
// //       if(findPrime(i)) {
// //         console.log( i );
// //       }
// // }

// let n = 5
// let count = 0
// for( let i = 1;i<=n;i++){
//     if(n %i == 0){
//         count++
//     }
// }
// console.log(count);

// function primeFactorsTo(max)
// {
//     var store  = [], i, j, primes = [];
//     for (i = 2; i <= max; ++i) 
//     {
//         if (!store [i]) 
//           {
//             primes.push(i);
//             for (j = i << 1; j <= max; j += i) 
//             {
//                 store[j] = true;
//             }
//         }
//     }
//     return primes;
// }

// console.log(primeFactorsTo(5));

// console.log(primeFactorsTo(15));

// for (var counter = 2; counter <= 5; counter++) {

//     var notPrime = false;
//     for (var i = 2; i <= counter; i++) {
//         if (counter%i===0 && i!==counter) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//                 console.log(counter);
//     }
// }

function runProgram(input) {
   let N = input.trim().split(" ").map(Number)
   let count=0
let i,j 
for(j=2;j<=N;j++){
for( i=1;i<=j;i++){
  if(j%i==0){
  count++
  }
}
if(count==2){

    console.log(j)
}
    count=0  
}
  }
  if (process.env.USERNAME === "win10") {
    runProgram(`5`);
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
      process.exit(0) ;
    });
  }