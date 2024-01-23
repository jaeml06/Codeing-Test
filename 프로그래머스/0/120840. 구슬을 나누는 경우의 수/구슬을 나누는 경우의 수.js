function solution(balls, share) {
    let answer = 0;
    answer = Math.round(facto(balls) / (facto(balls - share) * facto(share)))
    return answer;
}

function facto(n) {
    if(n <= 1){
        return 1;
    }
    return n * facto(n - 1);
}