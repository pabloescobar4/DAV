// const sum = (a,b) => {
// 	return a+b
// }
// 	function num (sum){
//      return sum
// 	}
// let a = 1
// let b = 2
// console.log(num(a,b))
let w =[]
let arr = [12431,12432,23332,32212,43132]
for(let i = 0; i < arr.length; i++){
     let x = arr[i]
	let res= x.toString().split("")
	let mid = res[2]
    w.push(mid)

	console.log(w.sort((a,b) =>a-b).map(Number))
}
