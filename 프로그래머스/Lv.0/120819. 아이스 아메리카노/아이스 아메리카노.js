function solution(money) {
    let answer = [];
    answer.push(Math.floor(money/5_500));
    answer.push(money%5_500);
    return answer;
}