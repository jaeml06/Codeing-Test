let fs = require('fs');
let read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [X, Y] = read1[0].split(' ');

const newX = [...X].reverse().join('');
const newY = [...Y].reverse().join('');

const answer = Number(newX) + Number(newY);

console.log(Number([...answer.toString()].reverse().join('')));