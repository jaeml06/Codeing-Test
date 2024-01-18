function solution(my_string, s, e) {
    let answer = my_string.slice(0, s) + [...my_string].slice(s, e + 1).reverse().join('') + my_string.slice(e+1, my_string.length)
    
    return answer;
}