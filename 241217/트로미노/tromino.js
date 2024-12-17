let fs = require('fs');
let [temp1, ...temp2] = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = temp1.split(' ').map(Number);

const matrix = temp2.map(val => val.split(' ').map(Number));

let answer = Number.MIN_SAFE_INTEGER;


    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < m - 1; j++){
            answer = Math.max(answer, matrix[i][j] + matrix[i+1][j] + matrix[i + 1][j + 1]);
            answer = Math.max(answer, matrix[i][j + 1] + matrix[i+1][j] + matrix[i + 1][j + 1])
            answer = Math.max(answer, matrix[i][j] + matrix[i][j+1] + matrix[i + 1][j + 1])
            answer = Math.max(answer, matrix[i][j] + matrix[i][j + 1] + matrix[i + 1][j])
        }
    }

for(let i = 0; i< n; i++){
    for(let j = 0; j < m - 2; j++){
        answer = Math.max(answer, matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2])
    }
}

for(let i = 0; i< n - 2; i++){
    for(let j = 0; j < m; j++){
        answer = Math.max(answer, matrix[i][j] + matrix[i + 1][j] + matrix[i + 2][j])
    }
}
console.log(answer)