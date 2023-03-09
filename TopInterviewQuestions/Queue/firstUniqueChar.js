const firstUniqChar = function(s){
    let count = {}
    for(let i=0;i<s.length;i++){
        if(count[s[i]]){
            count[s[i]]++
        }else{
            count[s[i]]=1
        }
    }
    for(let i=0;i<s.length;i++){
        if(count[s[i]] ==1){
            return i
        }
    }
    return -1
};
s = "leetcode"
console.log(firstUniqChar(s))