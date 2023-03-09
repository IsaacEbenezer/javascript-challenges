function isIsomorphic(s, t) {
    let s1 = s.split("")
    let t1 = t.split("")
    let r1 = ""
    for(let i=0;i<s1.length;i++){
        r1 += s1.indexOf(s1[i])
    }
    let r2 = ""
    for(let i=0;i<t1.length;i++){
        r2 += t1.indexOf(t1[i])
    }
    return r1 == r2
}
// s = "egg", t = "add"
s = "foo", t = "bar"
console.log(isIsomorphic(s,t))