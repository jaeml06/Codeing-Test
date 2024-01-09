function solution(a, b) {
    var answer = 0;
    aString = a.toString();
    bString = b.toString();
    answer = Math.max(parseInt(aString + bString), 2 * a * b);
    return answer;
}