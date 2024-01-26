function solution(n) {
    let answer = 1;
    let number = 1;
    
    while(n >= number){  
        answer += 1;
        number *= answer; 
    }
    return answer-1;
}