function solution(todo_list, finished) {
    let answer = [];
    todo_list.forEach((value, index) => {
        finished[index] ? '' : answer.push(value);
    })
    return answer;
}