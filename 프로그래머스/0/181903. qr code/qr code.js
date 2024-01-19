function solution(q, r, code) {
    let answer = '';
    [...code].forEach((value , index) => {
        if(index % q === r){
            answer += value;
        }
    })
    return answer;
}