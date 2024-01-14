function solution(start_num, end_num) {
    let answer = Array.from({length: end_num - start_num + 1}, (_, index) => start_num + index)
    return answer;
}