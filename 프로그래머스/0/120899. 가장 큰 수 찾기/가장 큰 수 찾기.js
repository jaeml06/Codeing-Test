function solution(array) {
    let answer = [];
    answer.push(Math.max(...array));
    answer[1] = array.indexOf(answer[0])
    
    return answer;
}