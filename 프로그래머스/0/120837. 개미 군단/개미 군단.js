function solution(hp) {
    let answer = 0;
    answer += Number.parseInt(hp / 5);
    hp = Math.floor(hp % 5);
    answer += Number.parseInt(hp / 3);
    hp = Math.floor(hp % 3);
    answer += hp % 3;
    return answer;
}