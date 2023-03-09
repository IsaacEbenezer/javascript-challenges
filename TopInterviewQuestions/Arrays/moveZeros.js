var moveZeroes = function(nums) {
    let pos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos] = nums[i];
            pos++;
        }
    }
    while (pos < nums.length) {
        nums[pos] = 0;
        pos++;
    }
    return nums;
   
};
nums = [0,1,0,3,12]
console.log(moveZeroes(nums))
