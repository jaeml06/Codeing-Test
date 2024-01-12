function solution(arr, queries) {
    var answer = [...arr];
    queries.forEach((arr) => {
        let temp = answer[arr[0]];
        answer[arr[0]] = answer[arr[1]];
        answer[arr[1]] = temp;
    })
    return answer;
}