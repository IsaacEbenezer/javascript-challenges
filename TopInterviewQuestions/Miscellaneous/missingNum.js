var missingNumber = function(nums) {
    const n = nums.length;

    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num);
  
    return expectedSum - actualSum;
};
nums = [3,0,1]
console.log(missingNumber(nums))