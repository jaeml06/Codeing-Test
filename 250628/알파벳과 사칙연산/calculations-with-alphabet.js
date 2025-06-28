const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const expr = input;

const usedVars = [];
const isUsed = Array(6).fill(false); // a ~ f

for (let i = 0; i < expr.length; i++) {
    const ch = expr[i];
    if ('a' <= ch && ch <= 'f') {
        const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        if (!isUsed[idx]) {
            isUsed[idx] = true;
            usedVars.push(ch);
        }
    }
}

let max = Number.MIN_SAFE_INTEGER;

function dfs(idx, map) {
    if (idx === usedVars.length) {
        const result = evaluate(expr, map);
        max = Math.max(max, result);
        return;
    }

    for (let i = 1; i <= 4; i++) {
        map[usedVars[idx]] = i;
        dfs(idx + 1, map);
    }
}


function evaluate(expression, map) {
    const tokens = [];
    for (let i = 0; i < expression.length; i++) {
        const ch = expression[i];
        if ('a' <= ch && ch <= 'f') tokens.push(map[ch]);
        else tokens.push(ch); // 연산자
    }

    let result = tokens[0];
    for (let i = 1; i < tokens.length; i += 2) {
        const op = tokens[i];
        const num = tokens[i + 1];
        if (op === '+') result += num;
        else if (op === '-') result -= num;
        else if (op === '*') result *= num;
    }

    return result;
}

dfs(0, {});
console.log(max);