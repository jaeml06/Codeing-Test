const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);

const getPermutations = (arr) => {
    if (arr.length === 1) return [arr];
    
    let result = [];
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const perms = getPermutations(rest);
        const attached = perms.map(p => [fixed, ...p]);
        result.push(...attached);
    });
    return result;
};

const bPermutations = new Set(getPermutations(arr2).map(p => p.join(",")));

let count = 0;

for (let i = 0; i <= n - m; i++) {
    const subArr = arr1.slice(i, i + m).join(",");
    if (bPermutations.has(subArr)) {
        count++;
    }
}

console.log(count);