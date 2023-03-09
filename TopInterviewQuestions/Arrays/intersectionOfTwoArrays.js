var intersection = function (nums1, nums2) {
    let empty = [];
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        if (nums1[i] === nums2[j]) {
          empty.push(nums1[i]);
        }
      }
    }
    return [...new Set(empty)];
  };
num1 = [1,2,3,1] ,num2=[2,3]
console.log(intersection(num1,num2))