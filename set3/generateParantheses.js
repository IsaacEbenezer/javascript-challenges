/* A BRUTE FORCE approach is an approach that finds all the possible solutions to find a satisfactory solution to a given problem. The brute force algorithm tries out all the possibilities till a satisfactory solution is not found. */

/**BACKTRACKING can be defined as a general algorithmic technique that considers searching every possible combination in order to solve a computational problem. */

var generateParenthesis = function(n) {
   let res = []
   const iterate = (str,open,close)=>{
    if(open>n || close >n || close >open)return
    if(str.length == n*2 && open ==close){
        res.push(str)
        return
    }
    iterate(str +'(',open+1,close)
        iterate(str + ')', open, close+1)
   }
   iterate("",0,0)
   return res
};
let n = 3
console.log(generateParenthesis(n))