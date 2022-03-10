let arr  = [254, 45, 212, 365, 2543, 112];
let N = arr.length-1;
for( let i = 0; i < N  ; i++){
    min = i;
    for( let j = i + 1; j< N; j++){
        if(arr[j] < arr[min]){
            min = j
        }
    }
    let result = arr[i];
    arr[i] = arr[min]
    arr[min] = result;
}
console.log(arr);