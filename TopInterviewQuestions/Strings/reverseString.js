function reverseString(s){
    let stack =[]
    let reverse =""
    for(let i=0;i<s.length;i++){
        stack.push(s[i])
    }
    while(stack.length >0){
        reverse += stack.pop()
    }
    return reverse
}
// s="hello"
s=
console.log(reverseString(s))