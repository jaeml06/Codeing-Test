function solution(num, total) {
    let answer = [];
    const avg = Math.ceil(total / num);
    
    const x = Math.trunc(num / 2);
    
    const start = avg - x;
    for(let i = 0; i < num; i++){
        answer.push(start + i)
    }
    return answer;
}