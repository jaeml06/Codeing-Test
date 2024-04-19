function solution(number, limit, power) {
    var answer = 0;
    const arr = Array.from({length: number}, (_,index) => index + 1);
    arr.forEach(value => {
        let count = 0;
        let i = 1;
        while(i <= Math.sqrt(value)){
            
            if(value % i === 0){
                count++;
                
                if(value / i !== i){
                    count++;
                }
            }
            
            i++;
        }
        
        if(limit < count){
            answer += power;
        } else {
            answer += count
        }
    })
    return answer;
}