function solution(a, b) {
    var answer = a.reduce((acc, cur, index) => {
        return acc + cur * b[index]
    }, 0)
    return answer;
}