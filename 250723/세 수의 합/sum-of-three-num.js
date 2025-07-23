const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const map = new Map();
let answer = 0;

arr.forEach(val => {
    map.set(val, (map.get(val) ?? 0) + 1);
})


for(let i = 0; i < n; i++){
    if(map.has(arr[i])){
        map.set(arr[i], map.get(arr[i]) - 1)
    }

    for(let  j = 0; j < i; j++){
        if(map.has(k - arr[i] - arr[j])){
            answer += map.get(k - arr[i] - arr[j]);
        }
    }
}

console.log(answer)