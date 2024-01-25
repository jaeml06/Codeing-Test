function solution(numbers, n) {
    let answer = 0;
    numbers.some(value => {
        answer += value;
        return answer > n ? true : false;
    })
    return answer;
}