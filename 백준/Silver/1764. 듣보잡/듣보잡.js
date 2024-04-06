let fs = require('fs');
let [read, ...rest] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = read.split(' ').map(value => Number(value));
const arr1 = rest.slice(0, N)
const arr2 = rest.slice(N, M + N);
let count = 0;
const answer = [];
const map = arr1.reduce((acc, cur) => {
    acc.set(cur, 1);
    return acc;
}, new Map());

arr2.forEach(value => {
    if(map.has(value)){
        count++;
        answer.push(value);
    }
})
console.log(count)
console.log(answer.sort().join('\n'));
