function solution(s) {
    const answer = [];
    const words = s.split(' ');
    words.forEach((word) => {
        const arr = [...word].map((value, index) => {
            return index % 2 === 0 ? value.toUpperCase() : value.toLowerCase();
        })
        answer.push(arr.join(''));
    })
    return answer.join(' ');
}