// function printSubsequence(input, output) {
// 	// Base Case
// 	// if the input is empty print the output string
// 	if (input.length == 0) {
// 	  console.log(output );
// 	  return;
// 	}
  
// 	// output is passed with including
// 	// the Ist character of
// 	// Input string
// 	printSubsequence(input.substring(1), output + input[0]);
  
// 	// output is passed without
// 	// including the Ist character
// 	// of Input string
// 	printSubsequence(input.substring(1), output);
//   }
  
//   // Driver code
//   // output is set to null before passing in as a
//   // parameter
//   var output =""
//   var input = "abcd";
//   let arr = [];
  
//   var s = printSubsequence(input, output);
 
 

// const mul = (a) => {
// return (b) => {
// return (c) => {
// return a*b*c;
// 	}
// }


// }
// console.log(mul(2)(3)(4))

// let arr = [1,0,1,0,0,0,0,0,0,1]
// // let count =0 
// // for(let i = 0; i < arr.length; i++){
// // if(arr[i]=="0"){
// // count++
// // }
// // }
// // console.log(count)

// let ones = arr.filter(value => {
// 	return value === 1
// })
// console.log(ones.length)

// const x = () => {
//   let  count = 0
//   return function () {
// 	  count += 1
// 	  return count
//   }
// }

// let y = x()
// console.log(y())
// console.log(y())


var subsetArray = (function() {
	return {
	  getResult: getResult
	}
  
	function getResult(array, n) {
  
	  function isBigEnough(value) {
		return value.length === n;
	  }
  
	  var ps = [
		[]
	  ];
	  for (var i = 0; i < array.length; i++) {
		for (var j = 0, len = ps.length; j < len; j++) {
		  ps.push(ps[j].concat(array[i]));
		}
	  }
	  return ps.filter(isBigEnough);
	}
  })();
  
  
  
   var arr = "abcd";
   console.log(subsetArray.getResult(arr,3));


// function subset(arra, arra_size)
//  {
//     var result_set = [], 
//         result;
    
   
// for(var x = 0; x < Math.pow(2, arra.length); x++)
//   {
//     result = [];
//     i = arra.length - 1; 
//      do
//       {
//       if( (x & (1 << i)) !== 0)
//           {
//              result.push(arra[i]);
//            }
//         }  while(i--);

//     if( result.length == arra_size)
//        {
//           result_set.push(result);
//         }
//     }

//     return result_set; 
// }

// console.log(subset("abcd", 3));
