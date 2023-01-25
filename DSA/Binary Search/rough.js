function binary(A,B,low,right){
    while(low <= right){
        let mid = Math.floor(low + (right-low)/2)
        // console.log(mid);
        if(A[mid] == B){
            return mid
        }
    if(A[mid] < B){
        low = mid+1;
    }
    else{
        right = mid -1
    }
}
return mid
}
let  A = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11 ]
A = A.sort((a, b) => a-b)
// console.log(A);
let B = 12;
let low = 0;
let right = A.length-1;
console.log(binary(A,B,low,right));