function solution(my_strings, parts) {
    let answer = '';
    parts.forEach(([s, e], index) => {
        answer += my_strings[index].slice(s, e + 1)
    })
    return answer;
}