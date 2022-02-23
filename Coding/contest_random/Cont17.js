let arr = [1,2,3,4,5]
let k = 7
let max = 0

for (let i = 0; i < arr.length; i++){
	let array =[]
	for (let j = i+1; j < arr.length; j++){
		
			let a = arr[i]+arr[j]
            array.push(a)
			console.log(array)
		
	}
}

    