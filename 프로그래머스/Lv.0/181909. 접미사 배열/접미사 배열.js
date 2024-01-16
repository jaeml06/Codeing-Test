function solution(my_string) {
    let answer = [];
    [...my_string].forEach((_, index) => {
        answer.push(my_string.slice(index, my_string.length + 1))
    });
    answer.sort()
    return answer;
}