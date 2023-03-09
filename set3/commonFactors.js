/*Number of Common Factors
Given two positive integers a and b, return the number of common factors of a and b.
An integer x is a common factor of a and b if x divides both a and b.*/

function numOfCommonFactors(a,b){
    let storeA = [] ,storeB = []
    for(let i=1;i<=a;i++){
        if(a%i==0){
           storeA.push(i)
        }   
    }for(let i =0;i<=b;i++){
        if(b%i==0){
            storeB.push(i)
        }
    }
    const commonElements = storeA.filter(element => storeB.includes(element));
    return commonElements.length
 
}
let a = 12, b = 6
console.log(numOfCommonFactors(a,b))