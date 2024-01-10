function solution(a, d, included) {
    var answer = 0;
    included.forEach((value, index) => {
        if(value){
            answer += a + index * d;
        }
    })
    return answer;
}