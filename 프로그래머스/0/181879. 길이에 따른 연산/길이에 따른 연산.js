function solution(num_list) {
    let answer = 0;
    if(num_list.length > 10){
        answer = num_list.reduce((pre, cur) => {
            return pre + cur
        }, 0);
    } else {
        answer = num_list.reduce((pre, cur) => {
            return pre * cur
        }, 1)
    }
    return answer;
}