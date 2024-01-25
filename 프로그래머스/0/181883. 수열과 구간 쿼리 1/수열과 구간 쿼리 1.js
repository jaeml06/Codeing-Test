function solution(arr, queries) {
    let answer = [...arr];
    queries.forEach(([s, e]) => {
        for(let i = s; i <= e; i++){
            answer[i] += 1;
        }
    })
    return answer;
}