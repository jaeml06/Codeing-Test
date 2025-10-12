const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input.splice(1, input[0] + 2)

const answer = arr.reduce(
  (prev, cur) => {
    const totalLength = prev[0] + cur.length;
    const countA = prev[1] + (cur[0] === 'a' ? 1 : 0);
    return [totalLength, countA];
  },
  [0, 0]
);

console.log(answer[0], answer[1]);