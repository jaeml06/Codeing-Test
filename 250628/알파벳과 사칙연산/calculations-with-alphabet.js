const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const expression = input[0];
const count = [...expression].filter(val => val !== '+' && val !== '-' && val !== '*').length;
const str = [...expression].filter(val => val === '+' || val === '-' || val === '*');
function combin(n){
    const result = []

    function bfs(temp){
        if(temp.length === n){
           result.push([...temp])
           return;
        }
        for(let i = 1; i <= 4; i++){
            temp.push(i);
            bfs(temp);
            temp.pop();
        }
    }
    bfs([]);
    return result;
}

let max = Number.MIN_SAFE_INTEGER
const arr = combin(count);
arr.forEach(val => {
    let sum = val[0]
    let j = 0;
    for(let i = 1; i < val.length; i++){
        switch(str[j++]){
            case '+' :
                sum += val[i]
                break;
            case '-' :
                sum -= val[i]
                break;
            case '*' :
                sum *= val[i]
                break;
        }
    }
    max = Math.max(max, sum)
})

console.log(max)