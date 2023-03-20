const isPowerOfFour = function(n){
    // Your code goes here
    if (n === 1) return true;
    if (n < 4) return false;
    return isPowerOfFour(n / 4);
};
n=16
console.log(isPowerOfFour(n))