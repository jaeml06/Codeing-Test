const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1].split('');

let answer = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
  if (seat[i] === '0') {
    const temp = [...seat];
    temp[i] = '1';

    const arr = temp.reduce((prev, cur, index) => {
      if (cur === '1') prev.push(index);
      return prev;
    }, []);

    if (arr.length >= 2) {
      let min = Number.MAX_SAFE_INTEGER;
      for (let j = 0; j < arr.length - 1; j++) {
        min = Math.min(min, arr[j + 1] - arr[j]);
      }
      answer = Math.max(answer, min);
    }
  }
}

console.log(answer);