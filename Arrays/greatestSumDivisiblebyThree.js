// nums = [3,6,5,1,8]

// function sumDivisibleBy3(nums){
//     let counter = 0
//     for(let i=0;i<nums.length;i++){
//        console.log(counter+=nums[i]%3)
//     }
    
// }
// console.log(sumDivisibleBy3(nums))

var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
           
            return i;
        }
    }
    // return nums.length;
};
nums = [1,3,5,6], target = 5
console.log(searchInsert(nums,target))