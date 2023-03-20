var intersection = function(nums1, nums2) {
  const ans = [];
  const set = new Set(nums1);

  for (const num of nums2) {
    if (set.has(num)) {
      ans.push(num);
      set.delete(num);
    }
  }

  return ans;
};
num1 = [1,2,3,1] ,num2=[2,3]
console.log(intersection(num1,num2))