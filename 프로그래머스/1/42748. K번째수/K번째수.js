function solution(array, commands) {
    const answer = [];
    commands.forEach(([i, j, k]) => {
        const a = array.slice(i-1, j).sort((a, b) => a - b)[k - 1];
        answer.push(a)
    })
    return answer;
}