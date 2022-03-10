function TwoPointer(arr,k) {
    let left = 0;
     let right = 1;
     while(left < arr.length && right < arr.length) {
         if((  arr[right] - arr[left]) == k ) {
    return "Yes";
         }else if( arr[right] - arr[left] < k){
             right++
         } 
    else{
        left++
    }
}
return "No"
}
let arr =   [ -8,-7, 5, 6, 6, 9]
console.log(TwoPointer(arr,16));