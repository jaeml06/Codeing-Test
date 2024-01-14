function solution(array) {
    let answer = 0;
    let map = new Map();
    array.forEach((value) => {
        if(!map.has(value)){
            map.set(value, 1);
            return
        }
        map.set(value, map.get(value)+1);
    })
    
    let max = 0;
    let arr = [...map.entries()].sort((a, b) => b[1] - a[1]);
    console.log(arr)
    if(arr.length > 1 && arr[0][1] === arr[1][1]){
        return -1;
    }
    arr.forEach(([key, value]) => {
        if(max < value){
            max = value;
            answer = key
            
        }
    })
    return answer;
}