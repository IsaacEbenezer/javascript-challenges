function longestPalindrome(str) {
    let longest = '';
    
    // check each substring in the string
    for (let i = 0; i < str.length; i++) {
      for (let j = i; j < str.length; j++) {    
        const substr = str.slice(i, j + 1);
        // check if the substring is a palindrome and longer than the current longest
        if (isPalindrome(substr) && substr.length > longest.length) {
          longest = substr;
        }
      }
    }
    
    return longest;
  }
  
  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  s = "cbbd"
console.log(longestPalindrome(s))