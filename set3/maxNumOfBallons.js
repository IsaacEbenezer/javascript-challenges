/*Maximum Number of Balloons
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
You can use each character in text at most once. Return the maximum number of instances that can be formed.*/

function maxNumberOfBalloons(text) {
    // create an object to store the frequency of each character in the text
    let charFreq = {}
    for (let char of text){
        charFreq[char] = (charFreq[char] || 0)+1
    }
    let count = 0;
    while(true){
        if(charFreq["b"] >=1 &&charFreq["a"]>=1 &&charFreq["l"]>=2 &&charFreq["o"]>=2 &&charFreq["n"]>=1){
            charFreq["b"]--
            charFreq["a"]--
            charFreq["l"] -=2
            charFreq["o"]-=2
            charFreq["n"]--
            count ++
        }else{
            break
        }
    }
    return count
}
  text = "nlaebolko"
  console.log(maxNumberOfBalloons(text))

