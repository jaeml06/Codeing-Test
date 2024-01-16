function solution(my_string, is_suffix) {
    let answer = 0;
    let suffix = [];
    [...my_string].forEach((_, index) => {
        suffix.push(my_string.slice(index, my_string.length+1))
    })
    answer = suffix.includes(is_suffix) ? 1 : 0
    return answer;
}