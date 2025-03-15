const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const moves = [];
for (let i = 1; i <= m; i++) {
    moves.push(input[i].split(" ").map(Number));
}
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const grid = Array.from({length : n}, () => Array(n).fill(false));

moves.forEach(([r, c]) => {
    let count = 0;
    grid[r-1][c-1] = true;

    for(let i = 0; i < 4; i++){
        const nx = dx[i] + c-1;
        const ny = dy[i] + r-1;
        if(0 <= nx && nx < n && 0 <= ny && ny < n){
            if(grid[ny][nx] === true){
                count++
            }
        }
    }
    if(count === 3){
        console.log(1)
    }else{
        console.log(0)
    }
})