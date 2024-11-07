let fs = require('fs');
let read = fs.readFileSync(0).toString().trim().split('\n');

const arr = [...read[0]].map(Number);

for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
        arr[i] = 1;
        break;
    }
    if(i === arr.length-1){
        arr[i] = 0
    }
}
const answer = arr.reverse().reduce((prev, cur, index) => {
    return prev + cur * Math.pow(2, index)
}, 0)
console.log(answer)