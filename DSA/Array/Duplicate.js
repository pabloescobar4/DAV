const arr = [1,2,3,4,5,6,7,7,8,6,10];
arr.sort((a, b) => a-b)
// finding Duplicte elements in an array and storing in an array;
let newArr = []
// for(let i = 0;i < arr.length;i++){
//     if(arr[i] === arr[i+1]){
//         newArr.push(arr[i]);
//     }
// }
// console.log(arr);

let left = 0,right = arr.length ;
while(left < right){
    if(arr[left] == arr[right]){
        newArr.push(arr[left]);
    }else if(arr[left] != arr[right]){
        left++; right++;
    }
}
console.log(newArr);


// const data = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
// newArr = data(arr)

console.log(newArr);