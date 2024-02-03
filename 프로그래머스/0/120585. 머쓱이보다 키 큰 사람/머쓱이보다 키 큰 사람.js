function solution(array, height) {
    let answer = array.filter((value) => {
        return value > height;
    }).length;
    return answer;
}