/**Contains Duplicate II
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k. */

function containsNearbyDuplicate(nums,k){
    const hashmap = {};
    for (let i = 0; i < nums.length; i++) {
        if (hashmap[nums[i]] || hashmap[nums[i]] === 0) {
            if (i - hashmap[nums[i]] <= k) {
                return true;
            }
        }
        hashmap[nums[i]] = i;
    }
    return false;
}
let nums = [1,2,3,1], k = 3
console.log(containsNearbyDuplicate(nums,k))