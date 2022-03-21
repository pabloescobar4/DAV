// function ans(arr){
// 	let obj ={}

// 	for (let i = 0; i < arr.length; i++){
// 		if(obj[arr[i]] === undefined){
// 			obj[arr[i]] =1
// 		}else{
// 			obj[arr[i]]++
// 		}
// 	}
// 	//console.log(obj)
	
// 	for(key in obj){
// 		if(obj[key]==1){
// 			console.log(key)
// 		}
// 	}
// }
// // let arr = [1,2,2,3,3]
// // ans(arr)

// function runProgram(input) {
// 	// Write code here
//    input = input.split("\n")
//   // console.log(input)
//    let test = +input[0]
//    let line = 1
//    for (let i = 1; i <= test; i++){
// 	   let n = +input[line++]
// 	    let arr = input[line++].split(" ").map(Number)
// 	   ans(arr)
//    }
//   }
//   if (process.env.USER === "dheerajmehta") {
// 	runProgram(`2
// 1
// 5
// 5
// 1 2 1 3 2`);
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


// x()

// const x  = () =>{ 
// 	console.log(1)
// }

// let a = "jdasnacjdsc"
// let k = "dsc"
// if(a.includes(k)){
// 	console.log("yes")
// }else{
// 	console.log("no")
// }

// let str ="aazaa"
// let obj ={}
// for(let i = 0;i<str.length;i++){
// 	if(obj[str[i]]=== undefined){
// 		obj[str[i]]=1
// 	}else{
// 		obj[str[i]]++
// 	}
// }
// let arr = ""
// for(key in obj){
// 	arr+=(key+obj[key])
// }
// let count = 0
// for(let i = 0;i<str.length;i++){
// 	if(str[i]==str[i+1]){
// 		count++
// 	}
// }
// console.log(count)
//console.log(arr)

// var arr =[1,2,3]
// let x = arr.filter((x)=>{
// 	if(x>1){
// 		console.log(x)
// 	}
// })



// arr ke no. ko add krna h like 51 = 6 and push it in array
// do string me so common nikalo fir  like"besh" and then  print subset with length of 3

function sum_digits_opt(n) { 
    return (n % 10 +  
    Math.floor(n/10) % 10 +  
    Math.floor(n/100) % 10); 
} 
let arr = [12,12,31,23]
let arr1 =[]
for(let i = 0; i < arr.length; i++){
	arr1.push(sum_digits_opt(arr[i]))
}
console.log(arr1)


// const ratings = [5, 4, 5];
// let sum = 0;

// const sumFunction = ratings.map((a, b) => a + b)
// console.log(sumFunction)


// let arr  =[23,24,23,34]

// let array = []
// for(let i =0;i<arr.length; i++){
// 	let arr1 = arr[i].toString()
// 	let  x = arr1.trim().split("").map(Number)
// let sum =0 
// for (let i = 0; i < x.length; i++){
// sum+=x[i]
// }
// array.push(sum)
// }

// console.log(array)

// let newstr1  = "apqs"
// let  newstr2 = "sapqs"
// let str1= newstr1.toLowerCase()
// let str2 = newstr2.toLowerCase()


// // a p q 
// // pqs 
// // sqp 
// // sap 



// var str3  = ""
// for (let i = 0; i <str1.length; i++){
// 	for (let j = 0; j <str2.length; j++){
// 		if(str2[i]==str1[j]){
//          str3 = str3 + str2[j]
// 		}
// 	}

// }
// console.log(str3)

// for(let i =0;i<str3.length; i++){
// 	let a = []
// 	for(let j =i ; j<str3.length; j++){
//      a.push(str3[j])
// 	if(a.length==3){
// 		console.log(a)
// 	}
// 	}
// }

// let arr  = [22,3,431,2,43,3,4,3,31]
// let w=arr.filter((x) =>{
// 	let n =(x>20)?x:null
// 	return n
// 	// if(x>30){
// 	// 	return (x)
// 	// }
// })
// console.log(w)

