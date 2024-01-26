function solution(n) {
    let answer = 0;
    for(let i = 1; i<= n; i++){
        let count = 0
        for(let j = 1; j<= i/2; j++){
            if(i%j === 0){
                count+= 1;
                if(count >= 2){
                    answer += 1;
                    break;
                }
            }
        }
    }
    return answer;
}