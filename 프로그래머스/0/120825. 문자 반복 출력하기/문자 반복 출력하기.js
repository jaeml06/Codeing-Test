function solution(my_string, n) {
    let answer = '';
    [...my_string].forEach((value) => {
        answer += value.repeat(n);
    })
    return answer;
}