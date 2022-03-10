let arr = [1,0,0,1,0,1,1]
for( let i = 0;i< arr.length;i++){
    let count = 0
    for( let j = i+1;j<arr.length;j++ ){
        if(arr[i] == 1 && arr[j] == 1){
            count++
        }
    }
    console.log(count);
}