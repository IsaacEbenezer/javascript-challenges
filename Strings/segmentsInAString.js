/*Number of Segments in a String
Given a string s, return the number of segments in the string. A segment is defined to be a contiguous sequence of non-space characters. */

function countSegments(str){
  return str==""?0: str.split(" ").length
}
// str = "Hello, my name is John"
// str = "Hello"
str=""
console.log(countSegments(str))