/* 
Q1.return if the element is present or not
Input:
 4 6 7 8 2 9 0 2
 Output:
 4
 Explanation:
 2 is at index 4 in the array*/

 //method 1: for loop 
const linearSearch = function(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }  
    }
    return -1
};
let arr = [4, 6 ,7, 8, 2, 9, 0, 2]
let target = 2
console.log(linearSearch(arr,target))

//method 2: using for of loop
/*const linearSearch = function(arr,target){
    for(element of arr){
        if(element === target){
            return true
        }
    }
    return false
};
let arr = [4, 6 ,7, 8, 2, 9, 0, 2]
let target = 11
console.log(linearSearch(arr,target))*/
