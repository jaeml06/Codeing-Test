function solution(arr, divisor) {
    const answer = [];
    arr.forEach(value => {
        if(value % divisor === 0){
            answer.push(value);
        }
    })
    if(answer.length === 0){
        answer[0] = -1;
    }
    return answer.sort((a,b) => a - b);
}