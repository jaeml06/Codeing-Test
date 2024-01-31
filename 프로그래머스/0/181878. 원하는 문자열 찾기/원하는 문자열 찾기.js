function solution(myString, pat) {
    
    let answer = new RegExp(pat, 'ig').test(myString) ? 1 : 0;
    return answer;
}