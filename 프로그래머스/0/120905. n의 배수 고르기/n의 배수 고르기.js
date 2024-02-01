function solution(n, numlist) {
    let answer = [];
    answer = numlist.reduce((pre, cur) => {
        if(cur % n === 0){
            pre.push(cur);
        }
        return pre;
    }, [])
    return answer;
}