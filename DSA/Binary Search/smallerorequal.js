function sum(A,B,N){
let left = 0,right = N-1;
let count = 0;
    while(left<=right){
    let mid = Math.floor((left +right)/ 2)
    // return mid
    if(A[mid]> B){
        count = mid-1
        right = mid-1
    }else {
        left = mid+1
    }
    return count
}

}
    let  A = [ 1, 2 , 4, 11, 11, 16],  B = 11;
    let  N = A.length
    console.log( sum(A,B,N));