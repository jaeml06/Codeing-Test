function solution(emergency) {
    let answer = [];
    let temp = [...emergency];
    temp.sort((a, b) => b - a);
    emergency.forEach((value , index) => {
        answer[index] = temp.indexOf(value) + 1 
    })
    return answer;
}