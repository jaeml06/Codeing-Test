let fs = require('fs');
let [read, ...rest] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = read.split(' ').map(value => Number(value));
const board = rest.slice(0, N).map((value) => value.split(' ').map(Number));
const dp = Array.from({length:N + 1}, () => Array.from({length: N + 1}, () => 0));

for(let y = 1; y < N + 1; y++){
    for(let x = 1; x < N + 1; x++){
        dp[y][x] = board[y - 1][x - 1] + dp[y - 1][x] + dp[y][x -1] - dp[y-1][x-1];

    }
}

answer = ''

rest.slice(N, rest.length).forEach(str => {
    const [x1, y1, x2, y2] = str.split(' ').map(value => Number(value));
    const temp =  dp[x2][y2] - dp[x2][y1 - 1] - dp[x1 - 1][y2] + dp[x1 - 1][y1 - 1]
    answer += temp + '\n'
})
console.log(answer)
