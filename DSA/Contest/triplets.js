let  nums = [-1,0,1,2,-1,-4]
let arr = []
for(var i = 0;i<nums.length;i++){
    for(var j = i+1; j<nums.length;j++){
        for(var k = j+1 ; k<nums.length;k++){
            if(nums[i] + nums[j] + nums[k] == 0){
                arr.push(nums[i], nums[j], nums[k])
            }
        }
    }
}
console.log(arr);
// let left = 0;
// let right = nums.length-1;
// for(var i = 0;i<nums.length;i++){
// while(left < right){
//     if(nums[left] + nums[left+1] + nums[right] == 0){
//         console.log(nums[left], nums[left+1],nums[right] );
//         return
//     }else{
//         left++;
//         right--;
//     }
// }
// }