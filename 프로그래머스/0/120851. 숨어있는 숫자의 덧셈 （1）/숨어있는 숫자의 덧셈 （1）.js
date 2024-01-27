function solution(my_string) {
    let answer = 0;
    answer = [...my_string].reduce((pre, cur) => {
        if(Number.isInteger(Number(cur))){
           return pre + Number(cur) 
        }
        return pre;
    }, 0)
    return answer;
}