function solution(n) {
    var answer = 0;
    if (n % 7 === 0){
        answer = n / 7;
    } else {
        answer = Number.parseInt(n / 7) + 1;
    }
    return answer;
}