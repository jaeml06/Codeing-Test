function solution(arr, idx) {
    let answer = -1;
    arr.some((value, index) => {
        if(idx <= index && value === 1){
            answer = index;
            return true;
        }
        return false;
    })
    return answer;
}