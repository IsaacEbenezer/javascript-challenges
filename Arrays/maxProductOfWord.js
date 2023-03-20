var maxProduct = function(words) {
    // your code goes here
    let each = words.map((e)=>{
       return e[0].indexOf(e[1])
    })
    return each
};
words = ["abcw","baz","foo","bar","xtfn","abcdef"]
console.log(maxProduct(words))