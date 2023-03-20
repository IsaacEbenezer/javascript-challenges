var rob = function(nums) {
    let money = 0
    for(let i=0;i<nums.length;i+=2){
        money +=nums[i]
    }
    return money
};
nums = nums = [2,7,9,3,1]
console.log(rob(nums))