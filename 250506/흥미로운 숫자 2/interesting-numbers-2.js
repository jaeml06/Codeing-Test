const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(" ").map(Number);
let count = 0
for(let i = x; i <= y; i++){
    const arr = [...i.toString()].map(Number);
    const map = new Map();
    arr.forEach((val) => {
        map.set(val, map.has() ? map.get(val) + 1 : 0)
    })

if(map.size === 2){
    let flag = false;
    map.values(val => {
        if(val !== 1 && map !== arr.length - 1){
            flag = true;
        }
    })
    if(!flag){
        count++
    }
}
}
console.log(count)
