const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const words = input.slice(1, 1 + n);
const queries = input.slice(1 + n, 1 + n + m);
const map1 = new Map();
const map2 = new Map();

words.forEach((val, index) => {
    map1.set(val, index + 1)
    map2.set((index+1).toString(), val)
})

queries.forEach(val => {
    if(Number.isNaN(Number(val))){
        console.log(map1.get(val))
    }else{
        console.log(map2.get(val))
    }
})