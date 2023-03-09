
var containsDuplicate = function(nums) {
    let sorted = nums.sort((a,b)=>a-b)
    for(let i=0;i<sorted.length;i++){
        if(sorted[i]==sorted[i+1]){
            return true
        }return false
    }
};
nums = [1,2,3,1]
console.log(containsDuplicate(nums))