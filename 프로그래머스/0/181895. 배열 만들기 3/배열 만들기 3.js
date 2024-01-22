function solution(arr, intervals) {
    let answer = [];
    intervals.forEach(([a, b]) => {
        answer = [...answer, ...arr.slice(a, b + 1)];
    })
    return answer;
}