let arr = [-2,45,0,11,-9]
function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let key = arr[i]
        let j=i-1
        while(j>=0 && j>key){
            arr[j+1]  = arr[j];
            j--
        }
        arr[j+1] = key
    }
return arr
}
console.log(insertionSort(arr))