function solution(num, k) {
    let answer = -1;
    [...num.toString()].some((value, index) => {
        if(Number(value) === k){
            answer = index + 1;
            return true;
        }
    })
    return answer;
}