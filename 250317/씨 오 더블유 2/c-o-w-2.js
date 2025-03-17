const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = [...input[1]];

let answer = 0

for(let i = 0; i< n; i++){
    if(string[i] === 'C'){
        for(let j = i + 1; j < n; j++){
            if(string[j] === 'O'){
                for(let k = j + 1; k < n; k++){
                    if(string[k] === 'W'){
                        answer++
                    }
                }
            }
        }
    }
}

console.log(answer)

