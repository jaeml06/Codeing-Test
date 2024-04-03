let fs = require('fs');
let [N, ...rest] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = [0,...rest.map(value => Number.parseInt(value)),0];
const answer = [];

arr.forEach((value, index)=> {
    if(index >= 1 && index < arr.length - 1){
        if(arr[index-1] <= value && arr[index+1]<= value){
            answer.push(index);
        }
    }
})

console.log(answer.join('\n'));
