function selectionSort(arr){
    let n = arr.length
    for(let i=0;i<n-1;i++){
        min = i
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        if(min !== i){
            const temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}
let arr = [-2,45,0,11,-9]
console.log(selectionSort(arr))