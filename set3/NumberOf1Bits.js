function Numberof1Bits(n){
    return n.toString(2)
    .split("0").join("").length;
}
let n =00000000000000000000000000001011
console.log(Numberof1Bits(n))


//O(logn) --- time complexity
