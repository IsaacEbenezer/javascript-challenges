/*Make Sum Divisible by P

Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by p. It is not allowed to remove the whole array.

Return the length of the smallest subarray that you need to remove, or -1 if it's impossible.

A subarray is defined as a contiguous block of elements in the array.*/

function makeSumDivisibleByP(nums,p){
    for(let i=0;i<nums.length;i++){
        sum = sum + nums[i]
        if(sum === p){
            return sum %p
        }
        else{

        }
}}
let sum = 0
let nums = [1,2,3]
let p=6
console.log(makeSumDivisibleByP(nums,p))



