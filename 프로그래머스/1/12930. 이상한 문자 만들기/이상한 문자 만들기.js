function solution(s) {
    const answer = []
    const word = s.split(' ')
    word.forEach((word) => {
        const arr = [...word].map((val, idx) => {
            return idx % 2 === 0 ? val.toUpperCase() : val.toLowerCase();
        })
        answer.push(arr.join(''))
    })
    return answer.join(' ')
}