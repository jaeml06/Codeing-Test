function solution(age) {
    let answer = '';
    let arr = [...age.toString()];
    arr.forEach((value) => {
        answer += String.fromCharCode(Number(value) + 97)
    })
    return answer;
}