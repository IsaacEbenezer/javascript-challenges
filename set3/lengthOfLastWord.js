/*Length of Last Word
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only*/

function lengthOfLastWord(s){
    let length = 0, max = 0;
    for (let i = 0; i < s.length; i++)
        if (s[i] !== ' ')
            length++, max = length;
        else
            length = 0;
    return max;
}
let str = "fly me to the moon "
console.log(lengthOfLastWord(str))