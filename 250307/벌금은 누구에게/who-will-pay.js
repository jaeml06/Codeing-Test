const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

const map = new Map();
let answer = -1

penalizedPersons.some(val => {
    map.set(val, (map.get(val) || 0) + 1);
    if(map.get(val) === k){
        answer = val
        return true
    }
    return false

})

console.log(answer)
