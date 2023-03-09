function countOccurence(str,target){
    let count =0
    for(let i=0;i<str.length;i++){
        if(str[i] === target){
            count++
        }
    }
    return count
}
str = "hello world",target = "l"
console.log(countOccurence(str,target))
