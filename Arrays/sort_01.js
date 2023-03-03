//time complexity
  //sorting - N(logN)
  //dutch national flag O(n)
  
let  nums = [2,0,2,1,1,0];
let num = [0,1,1,0,1,0,0,1,1]


var sort01 = function(num) {  
    let n  = num.length
    let ptr = -1;
    let itr = 0;
    while(itr<=n){
      if(num[itr]===0){
        ptr ++
       [num[ptr],num[itr]] = [num[itr],num[ptr]]
      }
      itr++
    }
    console.log(num)
   
};
sort01(num)
 
var sort012 = function(nums) {
   
  let n  = nums.length, zero = one = two = temp = 0;
  for(let i = 0; i<n; i++){
      if(nums[i]==0)zero++
      if(nums[i]==1)one++
      if(nums[i]==2)two++
  }
  while(zero-->0)nums[temp++]=0;
  while(one-->0)nums[temp++]=1;
  while(two-->0)nums[temp++]=2;

  return nums

};
console.log(sort012(nums))
