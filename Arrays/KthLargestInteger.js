let nums = ["1","2","12","21"],k=3
function KthLargestInteger(nums,k){
    let sort =  nums.sort((a,b)=>b-a)
   return sort[k-1]
}
console.log(KthLargestInteger(nums,k))

