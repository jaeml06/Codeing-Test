let fs = require('fs');
let [temp1, ...temp2] = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = temp1.split(' ').map(Number);
const matrix = temp2.map(val => val.split(' ').map(Number));

function getArea(k) {
    return k * k + (k + 1) * (k + 1);
}


function getNumOfGold(row, col, k) {
    let numOfGold = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (Math.abs(row - i) + Math.abs(col - j) <= k) {
                numOfGold += matrix[i][j];
            }
        }
    }
    return numOfGold;
}

let maxGold = 0;

for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
        for (let k = 0; k < 2 * (n - 1) + 1; k++) {
            const numOfGold = getNumOfGold(row, col, k);
            
            if (numOfGold * m >= getArea(k)) {
                maxGold = Math.max(maxGold, numOfGold);
            }
        }
    }
}

console.log(maxGold);