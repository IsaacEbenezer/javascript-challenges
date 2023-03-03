function ReverseAnInteger(n){
    let reversed = 0;
    while (n > 0) {
      reversed = (reversed * 10) + (n % 10);
      n = Math.floor(n / 10);
    }
    return reversed ;
}
console.log(ReverseAnInteger(1234))

//using recursion
function reverse(num){
if(num<10){
    return num
}
    let lastDigits = num %10
    let remainingDigits = Math.floor(num/10)
    let reversed  = reverse(remainingDigits)
    return parseInt(`${lastDigits}${reversed}`)
}
console.log(reverse(3456))