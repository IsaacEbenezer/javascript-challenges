/**Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4] */

function rotateArray(arr, k) {
  // calculate the actual number of rotations needed
  k = k % arr.length;
  
  // create a new array with the same length as the input array
  let rotatedArray = new Array(arr.length);
  
  // rotate the array by copying the elements to the new array
  for (let i = 0; i < arr.length; i++) {
    // calculate the new index for the current element
    let rotatedIndex = (i + k) % arr.length;
    console.log("d",rotatedIndex)
    // copy the current element to the new index in the rotated array
    rotatedArray[rotatedIndex] = arr[i];
  }
  
  // return the rotated array
  return rotatedArray;
}
const arr = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotateArray(arr,k))



//approach 2
function rotateArray(nums, k) {
    // calculate the actual number of rotations needed
    k = k % nums.length;
    
    // rotate the array using the splice and concat methods
    let rotatedArray = nums.splice(-k).concat(nums);
    
    // return the rotated array
    return rotatedArray;
  }
  nums = [1,2,3,4,5,6,7], k = 3
  console.log(rotateArray(nums,k))