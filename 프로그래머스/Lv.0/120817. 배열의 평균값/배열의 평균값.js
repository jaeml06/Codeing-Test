function solution(numbers) {
    let answer = 0;
    answer = numbers.reduce((pre, cur, i) => {
        if(numbers.length - 1 === i){
            return (pre + cur) / numbers.length
        }
        return pre + cur;
    }, 0)
    return answer;
}