const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");
r = Number(r) - 1;
c = Number(c) - 1;

const moves = {
    'U': [-1, 0],
    'D': [1, 0],
    'L': [0, -1],
    'R': [0, 1]
};

// 방향 반대로 변경
const reverseDir = {
    'U': 'D',
    'D': 'U',
    'L': 'R',
    'R': 'L'
};

let time = 0;

while (time < t) {
    let [dr, dc] = moves[d];
    let nr = r + dr;
    let nc = c + dc;

    if (nr < 0 || nr >= n || nc < 0 || nc >= n) {
        d = reverseDir[d];
    } else {
        r = nr;
        c = nc;
    }
    
    time++;
}

console.log(r + 1, c + 1);