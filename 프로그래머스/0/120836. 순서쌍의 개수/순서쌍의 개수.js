function solution(n) {
    let answer = 0;
    let temp = [];
    for(let i = 1; i<= n; i++){
        if(n % i === 0){
            temp.push(i);
        }
    }
    answer = new Set(temp).size
    return answer;
}