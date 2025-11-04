function solution(n) {
    let answer = 0;
    for(let i = 1; i <=n; i+=2){
        if(n % i === 0) answer++;
    }
    return answer;
}