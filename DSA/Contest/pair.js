let A = [ 478, 358, -38, -536, 705 ]
A.sort((a, b) => (a-b))
// console.log(A);
let left = 0;
let B = 320
let right = A.length - 1;
for(var i = 0; i < A.length;i++) {
    if (A.length <3){
        console.log(1);
        return
    }else {
    while(left < right){
if(A[left] + A[right] == B){
    console.log(1);
 return
}else if (A[left] + A[right] > B){
    right--;
}else if(A[left] + A[right] < B){
   left++  
   
}
    }
}console.log(0);
return
}