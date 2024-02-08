function solution(before, after) {
    var answer = 0;
    answer = [...before].every((value, index) => {
        if(after.includes(value)){
            after = after.replace(value, '');
            return true;
        }
        return false;
    }) ? 1 : 0;
    return answer;
}