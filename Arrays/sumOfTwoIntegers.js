/*Sum of Two Integers

Given two integers a and b, return the sum of the two integers without using the operators + and -.*/

function add (a,b){
    for(let i=1;i<=b;i++){
        a++
    }
    return a
}
console.log(add(1,3))