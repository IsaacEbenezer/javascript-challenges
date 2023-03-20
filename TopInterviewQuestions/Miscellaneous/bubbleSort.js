function bubbleSort(arr){
    let n = arr.length
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j] >arr[j+1]){
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
let arr = [-2,45,0,11,-9]
console.log(bubbleSort(arr))


//O(n^2)  --- time complexity