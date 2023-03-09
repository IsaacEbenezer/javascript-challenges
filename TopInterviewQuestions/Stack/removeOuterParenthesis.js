function removeOuterParentheses(s) {
    let result = "" ,count=0
   for(let i=0;i<s.length;i++){
    if(s[i] =="(" && count++ >0){
        result += s[i]
    }if(s[i] ==")" && --count >0){
        result += s[i]
    }
   }
   return result
  }
  s = "(()())(())"
  console.log(removeOuterParentheses(s))