var thirdMax = function(nums) {
    let max =  Math.max(...nums)
    for(let i=0;i<nums.length;i++){
        if(nums.length <=2){
            return max
        }else{
            let set = new Set(nums)
            let arr = Array.from(set)
            return arr[arr.length-1]
        }
    }
};
nums = [2,2,3,1]
console.log(thirdMax(nums))