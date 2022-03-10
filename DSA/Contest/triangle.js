let A = [1, 1, 1, 2, 2];
let left = 0;
let right = A.length - 1;
let count = 0;
while(left < right){
    for(var i = 0; i < A.length; i++){
    if(A[left] + A[right] > A[i]){
        count++;
        console.log(count);
    }else if(A[left] + A[right] < A[i]){
        right++;        
        // return count
    }else{
        left--
        // return count
    }
}
}