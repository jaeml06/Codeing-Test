function solution(babbling) {
    const arr = ['aya', 'ye', 'woo', 'ma'];
    let answer = babbling.reduce((pre, cur) => {
        arr.forEach((value) => {
            cur = cur.replace(value, ' ');
        })
        if(cur.trim() === ''){
            return pre + 1;
        }
        return pre;
    }, 0);
    return answer;
}