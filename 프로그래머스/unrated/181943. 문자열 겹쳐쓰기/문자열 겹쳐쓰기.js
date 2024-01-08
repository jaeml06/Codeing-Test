function solution(my_string, overwrite_string, s) {
    let answer = my_string.substr(0, s);
    answer += overwrite_string;
    answer += my_string.substr(s + overwrite_string.length, my_string.length)
    
    return answer;
}