function solution(s) {
    var answer = 0;
    const arr = s.split(' ');
    answer = arr.reduce((pre, cur, index, array) => {
        if(cur === 'Z'){
            return pre - array[index - 1];
        }
        return pre + Number(cur);
    }, 0)
    return answer;
}