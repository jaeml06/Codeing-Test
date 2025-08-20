const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

const freq = new Map();
for (const v of arr) {
    freq.set(v, (freq.get(v) || 0) + 1);
}

const items = Array.from(freq.entries());


items.sort((a, b) => {
    if (b[1] === a[1]) {
        return b[0] - a[0];
    }
    return b[1] - a[1];
});

const result = items.slice(0, k).map(([num, _]) => num);


console.log(result.join(" "));
