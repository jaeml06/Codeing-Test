function solution(n) {
    let count = n;
    let answer = [];
    while(true){
        if(count === 1) {
            answer.push(count);
            break;
        }
        if(count % 2 === 0){
            answer.push(count);
            count /= 2;
        }else{
            answer.push(count);
            count = count*3 + 1
        }
    }
    return answer;
}