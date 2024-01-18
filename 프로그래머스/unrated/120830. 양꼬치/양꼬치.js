function solution(n, k) {
    let answer = n * 12_000 + (k - Math.floor(n / 10)) * 2_000;
    return answer;
}