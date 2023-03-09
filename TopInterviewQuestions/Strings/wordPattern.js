const wordPattern = function(pattern, str){
    const words = str.split(" ");
   if (words.length !== pattern.length)
     return false;
 
   const charToIndex = new Map();
   const stringToIndex = new Map();
 
   for (let i = 0; i < pattern.length; ++i) {
     const char = pattern.charAt(i);
     const word = words[i];
     if (charToIndex.get(char) !== stringToIndex.get(word)) {
       return false;
     }
     charToIndex.set(char, i);
     stringToIndex.set(word, i);
   }
 
   return true; 
 };
 pattern = "abba", s = "dog cat cat dog"
 console.log(wordPattern(pattern,s))