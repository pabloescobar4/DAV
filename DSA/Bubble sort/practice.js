function BubbleSort(arr,N,x,y){
for( let i = 0;i<N; i++ ){
    for(let j = 0; j<N-i-1;j++){
        if(arr[j] > arr[j+1]){
        let result = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = result;
        }
    }
}
console.log(arr);
}



let arr = [ 2, 5,5,7,8,2,4,8,2,1,7,5,6]
let N = arr.length-1;

BubbleSort(arr,N)