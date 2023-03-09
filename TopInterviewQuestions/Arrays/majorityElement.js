function majorityElement(nums) {
    let count = 0,candidate = null
    for(let num of nums){
        if(count ===0){
            candidate = num
        }
        if(candidate==num){
            count++
        }else{
            count--
        }
    }
    return candidate
}
nums = [1,1,1,2,2]
console.log(majorityElement(nums))