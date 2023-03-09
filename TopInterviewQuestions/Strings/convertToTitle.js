const convertToTitle = function(n){
    let ans = '';
    while(n){
        // console.log(n%26 + " ");
        ans = String.fromCharCode('A'.charCodeAt(0) + (n-1)%26) + ans;
        n = Math.floor((n-1)/26);
    }
    return ans;
};
columnNumber = 1
console.log(convertToTitle(columnNumber))