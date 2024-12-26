let fs = require('fs');
let [temp1] = fs.readFileSync(0).toString().trim().split('\n');

const [K, N] = temp1.split(' ').map(Number);
const answer = []

function choose(n){
    if(n === N){
        console.log(answer.join(' '));
        return;
    }
    for(let i = 1; i <= K; i++){
        if(n >= 2 && answer[answer.length - 1] === answer[answer.length-2] && answer[answer.length - 1] === answer[answer.length-2]) continue;
        answer.push(i);
        choose(n+1)
        answer.pop();
    }
}

choose(0);