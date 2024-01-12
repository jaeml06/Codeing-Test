function solution(numLog) {
    let answer = '';
    answer = numLog.reduce((pre, cur, i, arr) => {
        if(i === 0){
            return pre;
        }    
        if(cur - arr[i-1] === 1){
            return pre + 'w';
        } else if(cur - arr[i-1] === -1){
            return pre + 's';
        } else if(cur - arr[i-1] === 10){
            return pre + 'd';
        }
        return pre + 'a';
    }, '')
    return answer;
    
}