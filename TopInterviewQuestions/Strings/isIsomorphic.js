const isIsomorphic = function(s, t){
    let charToIndex_s = new Array(128).fill(0);
    let charToIndex_t = new Array(128).fill(0);

    for (let i = 0; i < s.length; ++i) {
        if (charToIndex_s[s.charCodeAt(i)] !== charToIndex_t[t.charCodeAt(i)]) {
            return false;
        }
        charToIndex_s[s.charCodeAt(i)] = i + 1;
        charToIndex_t[t.charCodeAt(i)] = i + 1;
    }

    return true;
};
s = "egg", t = "add"
// s = "foo", t = "bar"
console.log(isIsomorphic(s,t))