const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].split(' ');

const answer = arr.reduce((prev, cur) => {
    return prev + cur.length
}, 0)

console.log(answer)