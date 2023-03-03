/*Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. */

function validAnagram(str,test){
    if(str.length !== test.length){
        return false
    }
        let str1 = str.split("").sort().join("")
        let test1 = test.split("").sort().join("")
       
        if(str1 === test1){
           return true
        }return false
    
    
}
let str = "anagram" , test = "nagaram"
console.log(validAnagram(str,test))