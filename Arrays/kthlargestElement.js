var findKthLargest = function(nums, k) {
    let descending = nums.sort((a,b)=>b-a)
    return descending[k-1]
};
let nums = [3,2,3,1,2,4,5,5,6], k=4
console.log(findKthLargest(nums,k))