function solution(start, end_num) {
    let answer = [];
    while(start>=end_num){
        answer.push(start--);
    }
    return answer;
}