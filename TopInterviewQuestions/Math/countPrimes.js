var countPrimes = function(n) {
    let res = []
    for(let i=2;i<=n;i++){
        if(i%2==0 ){
            res.push(i)
        }
    }
   return res
};
n=1
console.log(countPrimes(n))