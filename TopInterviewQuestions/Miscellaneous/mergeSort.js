let arr = [-2,45,0,11,-9]
function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
  }
  
  function merge(left, right) {
    let i = 0, j = 0;
    const result = [];
    
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }
    
    while (i < left.length) {
      result.push(left[i++]);
    }
    
    while (j < right.length) {
      result.push(right[j++]);
    }
    
    return result;
  }
  
console.log(mergeSort(arr))