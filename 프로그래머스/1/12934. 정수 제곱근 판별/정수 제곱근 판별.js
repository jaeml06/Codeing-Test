function solution(n) {
    const x = Math.sqrt(n);
    const answer = Number.isInteger(x) ? (x + 1) ** 2 : -1;
    return answer;
}