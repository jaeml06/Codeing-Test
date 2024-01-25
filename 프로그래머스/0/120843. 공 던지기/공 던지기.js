function solution(numbers, k) {
    var answer = 0;
    answer = numbers[2*(k - 1) % numbers.length];
    return answer;
}