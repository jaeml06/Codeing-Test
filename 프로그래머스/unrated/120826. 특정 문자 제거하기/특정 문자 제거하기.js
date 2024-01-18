function solution(my_string, letter) {
    let answer = '';
    [...my_string].forEach((value) => {
        if(letter !== value){
            answer += value;
        }
    })
    return answer;
}