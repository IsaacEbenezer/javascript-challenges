var twoSum = function(nums, target) {
   const values = {}
   for(let i =0;i<nums.length;i++){
    if(values[target-nums[i]] != undefined){
        return [values[target-nums[i]],i]
    }
    values[nums[i]] = i
   }
};
// nums = [12,7,11,15], target = 27

// console.log(twoSum(nums,target))

function fourSum(nums, target) {
    let result = [];
    let n= nums.length
    // Sort the input array
    nums.sort((a,b)=>a-b)
    // Use a nested loop approach to find all possible combinations of 4 numbers
        for(let i=0;i<n-3;i++){
            for(let j=i+1;j<n-2;j++){
                for(let k =j+1;k<n-1;k++){
                    for(let l=k+1;l<n;l++){
                        if(nums[i]+nums[j]+nums[k]+nums[l] === target){
                            result.push([nums[i],nums[j],nums[k],nums[l]])
                        }
                    }
                }
            }
        }
        return result;
  }
//   let numbers = [1,0,-1,0,-2,2], target = 0
//   console.log(fourSum(numbers,target))

function threeSum(nums) {
    nums.sort((a, b) => a - b); // Sort the array in non-descending order
    
    const result = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
      // Skip duplicates
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
      
      let left = i + 1;
      let right = nums.length - 1;
      
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          
          // Skip duplicates
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
    
    return result;
  }
  // console.log(threeSum(nums))