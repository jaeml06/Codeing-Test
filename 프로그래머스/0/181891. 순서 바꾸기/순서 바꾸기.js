function solution(num_list, n) {
    var answer = [];
    let before = num_list.slice(0, n);
    let after = num_list.slice(n);
    answer = [...after, ...before]
    return answer;
}