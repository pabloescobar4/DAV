// function printSubsequence(input, output) {
// 	// Base Case
// 	// if the input is empty print the output string
// 	if (input.length == 0) {
// 	  console.log(output + " ");
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
//   var output = "";
//   var input = "abcd";
//   printSubsequence(input, output);


const mul = (a) => {
return (b) => {
return (c) => {
return a*b*c;
	}
}


}
console.log(mul(2)(3)(4))

let arr = [1,0,1,0,0,0,0,0,0,1]
// let count =0 
// for(let i = 0; i < arr.length; i++){
// if(arr[i]=="0"){
// count++
// }
// }
// console.log(count)

let ones = arr.filter(value => {
	return value === 1
})
console.log(ones.length)

const x = () => {
  let  count = 0
  return function () {
	  count += 1
	  return count
  }
}

let y = x()
console.log(y())
console.log(y())