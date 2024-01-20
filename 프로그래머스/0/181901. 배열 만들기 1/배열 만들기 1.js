function solution(n, k) {
    let answer = [];
    let index = 1
    while(k * index <= n){
        answer.push( k * index++)
    }
    return answer;
}