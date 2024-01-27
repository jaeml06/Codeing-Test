function solution(arr) {
    let answer = [];
    answer = arr.map((value) => {
        if(value % 2 === 0 && value >= 50){
            return value / 2;
        } else if(value % 2 !== 0 && value <= 50){
            return value * 2;
        }
        return value;
    })
    return answer;
}