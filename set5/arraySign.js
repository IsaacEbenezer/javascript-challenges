function arraySign(nums){
    //helper function
    function sign(num){
        if(num>0){
            return 1
        }else if(num<0){
            return -1
        }
        else{
            return 0
        }
    }
    let res = nums.reduce((acc,curr)=>{
        return acc *curr
    })
    return sign(res)
}
nums = [-1,-2,-3,4,3,2,1,0]
console.log(arraySign(nums))