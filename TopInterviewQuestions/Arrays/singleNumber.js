/**Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

var singleNumber = function(nums) {
    return nums.reduce((prev, curr) => prev^curr)
};
nums = [1,2,2]
console.log(singleNumber(nums))