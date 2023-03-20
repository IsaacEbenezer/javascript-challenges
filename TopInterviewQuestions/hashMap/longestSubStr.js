const lengthOfLongestSubstring = function(s){
    let unique = new Set(s)
    return unique.size
};
s = "abcabcbb"
console.log(lengthOfLongestSubstring(s))