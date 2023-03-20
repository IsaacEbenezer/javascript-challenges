const convertToTitle = function(n){
    let ans = '';
    while(n){
        ans = String.fromCharCode('A'.charCodeAt(0) + (n-1)%26) + ans;
        n = Math.floor((n-1)/26);
    }
    return ans;
};
columnNumber = 1
console.log(convertToTitle(columnNumber))