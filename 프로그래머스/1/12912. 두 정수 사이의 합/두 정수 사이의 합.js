function solution(a, b) {
    var answer = 0
    let start = Math.min(a, b);
    for(let i = start; i<= start + Math.abs(b-a); i++){
        answer += i
    }
    return answer;
}