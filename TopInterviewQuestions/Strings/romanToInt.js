const romanToInt = function(s){
    let ans = 0;
    let roman = new Map();
    roman.set('I', 1);
    roman.set('V', 5);
    roman.set('X', 10);
    roman.set('L', 50);
    roman.set('C', 100);
    roman.set('D', 500);
    roman.set('M', 1000);

    for (let i = 0; i < s.length - 1; i++) {
      if (roman.get(s[i]) < roman.get(s[i + 1])) {
        ans -= roman.get(s[i]);
      } else {
        ans += roman.get(s[i]);
      }
    }
    ans += roman.get(s[s.length - 1]);

    return ans;
};

s = "MCMXCIV"
console.log(romanToInt(s))