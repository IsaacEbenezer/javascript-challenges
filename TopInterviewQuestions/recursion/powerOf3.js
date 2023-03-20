const isPowerOfThree = function(n){
    // Your code goes here
    if (n === 1) return true;
    if (n < 3) return false;
    return isPowerOfFour(n / 3);
};
n=16
console.log(isPowerOfThree(n))