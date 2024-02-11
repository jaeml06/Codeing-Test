function solution(A, B) {
    let answer = 0;
    let temp = A
    do{
        if(temp === B){
            break;
        }
        temp = temp[temp.length-1] + temp.slice(0, temp.length - 1);
        answer++;
        
    }while(A !== temp)
    if(answer === A.length){
        return -1;
    }
    return answer;
}