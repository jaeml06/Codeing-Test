function solution(number) {
    let answer = 0
    for(const i of number){
        answer += Number.parseInt(i);
    }
    answer = answer % 9;
    return answer;
}