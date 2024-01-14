function solution(arr, queries) {
    queries.forEach(([s, e, k]) => {
        arr.forEach((_, index) => {
            if(s <= index && index <= e && index % k === 0){
                arr[index] += 1;
            }
        })
    })
    return arr;
}