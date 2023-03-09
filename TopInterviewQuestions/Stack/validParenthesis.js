const isValid = function(s){
    const len = s.length;
    const stk = [];
    let x;

    for (let i = 0; i < len; i++) {
      if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
        stk.push(s[i]);
        continue;
      }
      if (stk.length === 0) {
        return false;
      }
      switch (s[i]) {
        case ')':
          x = stk.pop();
          if (x == '{' || x == '[') {
            return false;
          }
          break;
        case '}':
          x = stk.pop();
          if (x == '(' || x == '[') {
            return false;
          }
          break;
        case ']':
          x = stk.pop();
          if (x == '{' || x == '(') {
            return false;
          }
          break;
      }
    }
    return stk.length === 0;
};
s = "()[}"
console.log(isValid(s))