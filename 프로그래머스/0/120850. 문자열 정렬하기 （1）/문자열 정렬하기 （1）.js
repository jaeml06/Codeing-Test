function solution(my_string) {
    var answer = [];
    answer = [...my_string].reduce((pre, cur) => {
        if(Number.isInteger(Number(cur))){
            pre.push(Number(cur));
        } 
        return pre
    }, []).sort((a, b) => a - b)
    return answer;
}