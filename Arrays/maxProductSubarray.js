var maxProduct = function(nums) {
    let subArr = [];
    for(let i = 0; i < nums.length; i++){
      for(let j = i + 1; j <= nums.length; j++){
        let sub = nums.slice(i, j);
        subArr.push(sub);
      }
    }
    let maxProduct = -Infinity;
    for(let sub of subArr){
      let product = 1;
      for(let num of sub){
        product *= num;
      }
      maxProduct = Math.max(maxProduct, product);
    }
    return maxProduct;
  };
  let nums = [2, 3, -2, 4];
  console.log(maxProduct(nums)); // output: 6
  