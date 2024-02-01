function solution(quiz) {
    var answer = [];
    quiz.forEach((value) => {
        const arr = value.split('=');
        if(eval(arr[0]) === Number(arr[1])){
            answer.push('O');
        } else {
            answer.push('X')
        }
    });
    return answer;
}