function solution(names) {
    let answer = [];
    names.forEach((value, index) => {
        if(index % 5 === 0){
            answer.push(value);
        }
    })
    return answer;
}