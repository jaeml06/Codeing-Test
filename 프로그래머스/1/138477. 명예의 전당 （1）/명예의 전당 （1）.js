function solution(k, score) {
    var answer = [];
    let honor = [];
    for(let i = 0; i < score.length; i++){
        honor.push(score[i]);
        honor.sort((a, b) => b- a);
        answer.push(Math.min(...honor.slice(0, k)));
    }
    return answer;
}