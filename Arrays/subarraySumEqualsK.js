/*Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.*/

nums = [1,1,2], k = 2
function subarraySumEqualsK(nums,k){
    let counter = 0;
    for(let i=0;i<nums.length;i++){
        base = 0;
        for(let j=i;j<nums.length;j++){
            base += nums[j];
            if(base ===k) counter ++
        }
    }
    return counter
}
console.log(subarraySumEqualsK(nums,k))