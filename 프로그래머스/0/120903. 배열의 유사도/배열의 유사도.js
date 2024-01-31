function solution(s1, s2) {
    var answer = 0;
    s1.forEach((value) => {
        if(s2.includes(value)){
            answer++;
        }
    })
    return answer;
}