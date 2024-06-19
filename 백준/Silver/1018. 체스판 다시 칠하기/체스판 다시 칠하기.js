let fs = require('fs');
let read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = read1.shift().split(' ').map(Number);
const board = read1.map(value => value.split(''));

const calculateRepaints = (startX, startY, pattern) => {
  let repaints = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[startX + i][startY + j] !== pattern[i][j]) {
        repaints++;
      }
    }
  }
  return repaints;
};

const pattern1 = [
  'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW',
  'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'
];

const pattern2 = [
  'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB',
  'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'
];

let minRepaints = Number.MAX_SAFE_INTEGER;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    let repaints1 = calculateRepaints(i, j, pattern1);
    let repaints2 = calculateRepaints(i, j, pattern2);
    minRepaints = Math.min(minRepaints, repaints1, repaints2);
  }
}

console.log(minRepaints);