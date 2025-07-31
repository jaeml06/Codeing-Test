const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [t, a, b] = input[0].split(' ').map(Number);
const snData = input.slice(1, 1 + t).map(line => line.split(' '));

let count = 0
for(let k = a; k <= b; k++){
    let d1 = Number.MAX_SAFE_INTEGER;
    let d2 = Number.MAX_SAFE_INTEGER;
    snData.forEach(([alpa, pos]) => {
        if(alpa === 'S'){
            d1 = Math.min(d1, Math.abs(k-pos))
        }
        if(alpa === 'N'){
            d2 = Math.min(d2, Math.abs(k-pos))
        }
    })
    if(d1 <= d2){
        count++
    }
}

console.log(count)