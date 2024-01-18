function solution(my_string, is_prefix) {
    var answer = 0;
    let prefix = [];
    [...my_string].forEach((_,index) => {
        prefix.push(my_string.slice(0,index+1))
    })
    answer = prefix.includes(is_prefix) ? 1 : 0
    return answer;
}