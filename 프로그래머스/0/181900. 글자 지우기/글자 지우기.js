function solution(my_string, indices) {
    let answer = '';
    [...my_string].forEach((value, index) => {
        if(!indices.includes(index)){
            answer += value;
        }
    })
    return answer;
}