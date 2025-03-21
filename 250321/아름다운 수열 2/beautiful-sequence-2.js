const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);

const getPermutations = (arr, selectNum) => {
    if (selectNum === 1) return arr.map((v) => [v]);

    let result = [];
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const perms = getPermutations(rest, selectNum - 1);
        const attached = perms.map((p) => [fixed, ...p]);
        result.push(...attached);
    });

    return result;
};

const bPermutations = getPermutations(arr2, m);

let count = 0;

for (let i = 0; i <= n - m; i++) {
    const subArr = arr1.slice(i, i + m)
    const flag  = bPermutations.some((val) => {
        return val.every((a, b) => a === subArr[b])
    })
    if(flag) count++
}

console.log(count);