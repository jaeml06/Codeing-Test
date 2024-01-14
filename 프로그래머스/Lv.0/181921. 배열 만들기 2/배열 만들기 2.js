function solution(l, r) {
    let answer = [];
    for(let i = l; i <= r; i++){
        let iArray = Array.from(i.toString());
        if(iArray.every((value) => value === '5' || value === '0')){
            answer.push(i);
        }
    }
    if(answer.length === 0){
        answer.push(-1);
    }
    return answer;
}