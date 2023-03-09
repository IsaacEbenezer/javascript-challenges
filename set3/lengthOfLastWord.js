/*Length of Last Word
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only*/

function lengthOfLastWord(str){
    let lastWord = str.trim().split(" ").slice(-1).join("")
    return lastWord.length
}
let str = "fly me to the moon "
console.log(lengthOfLastWord(str))