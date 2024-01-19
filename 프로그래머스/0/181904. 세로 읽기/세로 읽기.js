function solution(my_string, m, c) {
    let answer = '';
    [...my_string].forEach((value, index) => {
        if(index % m === c - 1){
            answer += value;
        }
    })
    return answer;
}