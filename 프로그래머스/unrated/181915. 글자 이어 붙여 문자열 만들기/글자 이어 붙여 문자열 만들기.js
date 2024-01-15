function solution(my_string, index_list) {
    let answer = '';
    index_list.forEach((value) => {
        answer += my_string[value];
    })
    return answer;
}