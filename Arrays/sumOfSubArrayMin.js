var sumSubarrayMins = function(arr) {
    let sum = 0;
    for (let len = 1; len <= arr.length; len++) {
        for (let start = 0; start <= arr.length - len; start++) {
            let subarray = arr.slice(start, start + len);
            let min = Math.min(...subarray);
            sum += min;
        }
    }
    return sum;
};
arr = [11,81,94,43,3]
console.log(sumSubarrayMins(arr))