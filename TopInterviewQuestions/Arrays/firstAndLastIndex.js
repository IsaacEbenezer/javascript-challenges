var searchRange = function(nums, target){
    let ans = [-1, -1];
    let low = 0;
    let high = nums.length - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if(nums[mid] == target) {
            while(nums[low] != target) {
                low++;
            }
            while(nums[high] != target) {
                high--;
            }
            ans[0] = low;
            ans[1] = high;

            return ans;
        }
        else if(target > nums[mid]) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return ans;
}
nums = [5,7,7,8,8,10], target = 8
console.log(searchRange(nums,target))