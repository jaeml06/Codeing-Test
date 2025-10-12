const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input.slice(1, Number(input[0]) + 1)
const char = input[Number(input[0]) + 1]


const len = arr.reduce((prev, cur) => {
  if(cur[0] === char){
    return [prev[0] + 1, prev[1] + cur.length]
  }
  return prev
},[0, 0])

console.log(len[0], (len[1] / len[0]).toFixed(2))