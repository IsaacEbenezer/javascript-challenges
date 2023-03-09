const isAnagram = function(s, t){
      if(s.length !== t.length){
        return false
      }
      let sort_s = s.split("").sort().join("")
      let sort_t = t.split("").sort().join("")
      if(sort_s ===sort_t){
        return true
      }return false
};
s = "rat", t = "car"
console.log(isAnagram(s,t))