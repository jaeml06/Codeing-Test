const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const expression = input[0];
const opers = [...expression].filter(val => val === '+' || val === '-' || val === '*');
const count = [...expression].filter(val => val !== '+' && val !== '-' && val !== '*').length;

let max = Number.MIN_SAFE_INTEGER;

function dfs(path) {
    if (path.length === count) {
        let sum = path[0];
        let j = 0;
        for (let i = 1; i < path.length; i++) {
            switch (opers[j++]) {
                case '+':
                    sum += path[i];
                    break;
                case '-':
                    sum -= path[i];
                    break;
                case '*':
                    sum *= path[i];
                    break;
            }
        }
        max = Math.max(max, sum);
        return;
    }

    for (let i = 1; i <= 4; i++) {
        path.push(i);
        dfs(path);
        path.pop();
    }
}

dfs([]);

console.log(max);