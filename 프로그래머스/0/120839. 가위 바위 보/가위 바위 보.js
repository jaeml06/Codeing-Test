function solution(rsp) {
    let answer = '';
    const a = {
        '2': '0',
        '0': '5',
        '5': '2',
    };
    [...rsp].forEach((value) => {
        answer += a[value]
    })
    return answer;
}