n = 5

var fizzBuzz = function(n) {
    let res = []
    for(let i=1;i<=n;i++){
        if(i%3 ==0 && i%5 ==0){
           res.push("fizz buzz")
        }else if(i%5 ==0){
            res.push("buzz")
        }else if(i%3 ==0){
            res.push("fizz")
        }else{
            res.push(i)
        }
    }
    return res
};
console.log(fizzBuzz(n))