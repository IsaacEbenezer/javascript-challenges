/**A pangram is a sentence where every letter of the English alphabet appears at least once. */

const checkIfPangram = function(sentence){
   
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        str = sentence.toLowerCase();
        for (let char of alphabet) {
          if (!str.includes(char)) {
            return false;
          }
        }
        return true;
};
sentence = "leetcode"
console.log(checkIfPangram(sentence))