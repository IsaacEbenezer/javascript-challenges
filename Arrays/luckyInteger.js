var findLucky = function(arr) {
    let frequency = {}
    for(let i=0;i<arr.length;i++){
        let num = arr[i];
        if(!frequency[num]) {
            frequency[num] = 1;
        } else {
            frequency[num]++;
        }
    }
    let lucky = []
    for(let key in frequency){
        let value = frequency[key]
        if(key==value){
          lucky.push(key) 
        }
    }
  return lucky.length ? Math.max(...lucky):-1
};
arr = [2,2,2,3,3]

console.log(findLucky(arr))