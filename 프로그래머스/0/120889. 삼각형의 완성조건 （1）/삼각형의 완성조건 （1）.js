function solution(sides) {
    let answer = sides.sort((a, b) => a-b)[2] < sides[1] + sides[0] ? 1 : 2;
    return answer;
}