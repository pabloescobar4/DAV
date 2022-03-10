let arr = [1,2,3,4,5]
let N = arr.length;
let product = 1
for(let i = 0; i < N; i++) {
    product *= arr[i]
}
console.log(product)
let result = []
for(let i = 0; i < N; i++) {
    result.push(product/ arr[i])
}
// console.log(result);