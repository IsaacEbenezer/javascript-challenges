const permute = (nums)=>{
  let res = []
  function iterate(arr,temp){
    if(arr.length ===0){
        res.push(temp);
        return
    }
    for(let i=0;i<arr.length;i++){
        iterate(arr.filter((arr,idx)=> idx !==i),[...temp,arr[i]])
    }
  }
  iterate(nums,[])
  return res
}
nums = [1,3]
console.log(permute(nums))