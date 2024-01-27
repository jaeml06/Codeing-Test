function solution(n) {
    const answer = [];
    let div = 2;
    while(n > 1){
        if(n % div === 0){
            answer.push(div)
            n /= div;
        } else {
            div++;
        }
    }
    return [...new Set(answer)]
}