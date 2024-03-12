function solution(n) {
    let answer = [...n.toString()].sort((a, b) => b-a).join('');
    return Number(answer);
}