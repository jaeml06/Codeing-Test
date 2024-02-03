function solution(array, n) {
    var answer = 0;
    array.forEach(value => {
        if(value === n){
            answer +=1;
        }
    })
    return answer;
}