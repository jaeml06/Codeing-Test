const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const aData = input.slice(1, n + 1).map(line => line.split(" ").map(Number));
const bData = input.slice(n + 1, n + 1 + m).map(line => line.split(" ").map(Number));

const A = [];
const B = [];

aData.forEach(([v, t]) => {
    for(let i = 0; i < t; i++){
        A.push(A.length === 0 ? v : A[A.length - 1] + v);
    }
});

bData.forEach(([v, t]) => {
    for(let i = 0; i < t; i++){
        B.push(B.length === 0 ? v : B[B.length - 1] + v);
    }
});

let answer = 0;
let prevLead = A[0] > B[0] ? 'A' : 'B';

for (let i = 0; i < A.length; i++) {
    if (A[i] > B[i]) {
        if (prevLead !== 'A') {
            answer++;
            prevLead = 'A'
        }
    } else if (A[i] < B[i]) {
        if (prevLead !== 'B') {
            answer++;
            prevLead = 'B'
        }
    }
}

console.log(answer);