var compressString = function (str) {
    let ans = '';
    for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== str.charAt(i + 1)) {
    ans+=str.charAt(i) ;
    }
    }
    return ans;
    }
console.log(compressString("aabbcd"))