let nums = [1,2,4,5,6] ,target = 5
function binarySearch(nums,target){
    let low = 0;
    let high = nums.length-1
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(nums[mid] === target){
            return mid;
        }
       else if(nums[mid] < target){
            low = mid+1
        }else{
            high = mid-1
        }
    }
    return -1
    
}
console.log(binarySearch(nums,target))