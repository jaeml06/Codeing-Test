function solution(s) {
    const arr = s.split(' ')
    const answer = `${Math.min(...arr)} ${Math.max(...arr)}`
    return answer
}