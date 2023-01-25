let arr = [1,3,3,4,5,6,7,8,10];
let n = arr.length;

//using for loop

// for (let i= 0;i<arr.length;i++){
//     if(arr[i] !=i+1 ){
//         console.log(arr[i]-1);
//     }
// }


// using two pointers

let left =0,right = 1;
while(left < right){
    if(arr[right] - arr[left] != 1){
        console.log(arr[left]+1);
        break;
    }
    else {
    left++; right++;
    }

}

// console.log("arr",a);

// function getMissingNo(a, n) {
  
//     let total = Math.floor((n + 1) * (n + 2) / 2);
//     for (let i = 0; i < n; i++)
//     total -= a[i];
//     debugger;
//     return total;
// }

// console.log(getMissingNo(a, n));