const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map(val => val.trim( ));

const [N, K, T] = input[0].split(' ')
const arr = input.slice(1).reduce((prev, cur) => {
    if(cur.includes(T)){
        prev.push(cur)
        return prev
    }
    return prev
}, [])

arr.sort()

console.log(arr[Number(K)- 1])

