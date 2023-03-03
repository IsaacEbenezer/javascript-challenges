/*Group Anagrams
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.*/

function anagram(strs){
    let obj = {}
    strs.forEach(str=>{
        const sorted = str.split("").sort().join("")
        obj[sorted] ? obj[sorted].push(str) : obj[sorted]=[str]
    })
    return Object.values(obj)
}
strs = ["eat","tea","tan","ate","nat","bat"]
console.log(anagram(strs))