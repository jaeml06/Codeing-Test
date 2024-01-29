function solution(order) {
    let answer = [...order.toString()].reduce((pre, cur) => {
        if(cur === '3' || cur === '6' || cur === '9'){
            return pre + 1;
        }
        return pre;
    }, 0)
    return answer;
}