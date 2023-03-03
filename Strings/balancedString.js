var balancedStringSplit = function(s) {
    
    let countR = 0, countL = 0, count = 0
  
    for(let i = 0; i <s.length; i++){
      if(s[i] === "L") countL++
      if(s[i] === "R") countR++
      
      if(countL == countR) {
        count++
      }
    }
    return count
  
};
console.log(balancedStringSplit("RLRRLLRLRL"))
