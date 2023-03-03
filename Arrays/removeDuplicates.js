//approach 1:
let arr = [1,2,3,4,4,5,6,6]
let uniqueArr = [...new Set(arr)]
console.log(uniqueArr)

//approach2
const arr1 = [1, 2, 3, 3, 4, 4, 5];
const uniqueArr1 = arr.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueArr1);

//approach 3:

const arr2 = [10, 20, 30, 30, 40, 40, 50]
const uniqueArr2 = []
for(let i=0;i<arr2.length;i++){
    if(!uniqueArr2.includes(arr2[i])){
        uniqueArr2.push(arr2[i]);
    }
}
console.log(uniqueArr2)