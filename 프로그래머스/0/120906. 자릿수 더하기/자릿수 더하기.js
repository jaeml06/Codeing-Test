function solution(n) {
    var answer = [...n.toString()].reduce((pre, cur) => {
        return pre + Number(cur);
    },0);
    return answer;
}