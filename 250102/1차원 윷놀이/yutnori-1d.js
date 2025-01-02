let fs = require('fs');
let [temp1, temp2] = fs.readFileSync(0).toString().trim().split('\n');
const [n, m, k] = temp1.split(' ').map(Number);
const arr = temp2.split(' ').map(Number);
const pieces = Array(k).fill(1);

let answer = 0

function choose(num){
    let score = 0;
    for (const piece of pieces) {
        // 조건이 true이면 1을 더하고, false이면 0을 더합니다.
        score += piece >= m ? 1 : 0;
    }

    answer = Math.max(answer, score)

    if(num === n){
        return;
    }

    for (let i = 0; i < k; i++) {
        if (pieces[i] >= m) {
            continue;
        }
        
        pieces[i] += arr[num];
        choose(num + 1);
        pieces[i] -= arr[num];
    }
}
choose(0)
console.log(answer)