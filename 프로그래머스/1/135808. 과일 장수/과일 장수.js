function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => b - a);
    for(let i =0; i<= score.length-m; i+=m){
        const box = []
        for(let j =0; j < m; j++){
            box.push(score[i + j]);
        }
        answer += Math.min(...box) * m;
    }
    return answer;
}