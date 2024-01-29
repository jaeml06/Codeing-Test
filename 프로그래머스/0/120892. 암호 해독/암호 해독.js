function solution(cipher, code) {
    var answer = [...cipher].reduce((pre, cur, index) => {
        if(index % code === code - 1){
            return pre + cur;
        }
        return pre;
    }, '')
    return answer;
}