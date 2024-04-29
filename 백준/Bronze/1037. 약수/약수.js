const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const n = parseInt(input.shift())
const arr = input[0].split(' ').map(num => parseInt(num))

let max = Math.max(...arr)
let min = Math.min(...arr)

console.log(max * min)