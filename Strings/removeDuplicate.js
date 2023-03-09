function removeDuplicates(s){
    let splitting = s.split("")
    let sorted = splitting.sort()
    let unique = ""
    for(let i=0;i<sorted.length;i++){
        if(!unique.includes(sorted[i])){
            unique += sorted[i]
        }
    }
    return unique
}
s = "bcabc"
console.log(removeDuplicates(s))