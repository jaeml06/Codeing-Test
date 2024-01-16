function solution(intStrs, k, s, l) {
    let answer = [];
    intStrs.forEach((value) => {
        let temp = Number(value.slice(s, s + l));
        if(temp > k) answer.push(temp)
        
    })
    return answer;
}