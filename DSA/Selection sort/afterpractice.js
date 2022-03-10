let arr = [234, 457,237,7435,  312,124, 756,121,912]
let N = arr.length-1;
for( let i = 0;i < N-1; i++){
    let min = i;
    for ( let j = i+1; j< N ; j++){
        if(arr[j] < arr[min]){
            min = j
        }
    }
    let result = arr[i]
    arr[i] = arr[min]
    arr[min] = result
}
console.log(arr);