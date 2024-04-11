function solution(s) {
    var answer = [];
    [...s].forEach((value1, index1) => {
        const arr = [...s].slice(0, index1).reverse();
        const flag = arr.some((value2, index2) => {
            if(value2 === value1) {
                answer.push(index2+1);
                return true;
            }
            return false;
        })
        if(!flag){
            answer.push(-1);
        }
        
    })
    return answer;
}