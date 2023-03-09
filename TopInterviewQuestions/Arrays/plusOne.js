var plusOne = function(digits) {
    return (BigInt(digits.join("")) + BigInt(1)).toString().split("");
};
digits = [1,2,3]
console.log(plusOne(digits))