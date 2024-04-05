let fs = require('fs');
let [condition, lineString, friendString] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = condition.split(' ').map(value => Number(value));
const line = lineString.split(' ').map(value => Number(value));
const friend = friendString.split(' ').map(value => Number(value));

let count = 0
line.some((value, index) => {
    if(index === friend.length){
        return true;
    }
    if(!friend.includes(value)){
        count++;
    }
})
console.log(count);