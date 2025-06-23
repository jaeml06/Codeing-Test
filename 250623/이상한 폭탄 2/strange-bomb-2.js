const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const nums = input.slice(1, n + 1).map(Number);
const expole = Array(nums.length).fill(true);

let max = -1;
for(let i = 0; i < nums.length; i++){
    const pos = nums[i];
    for(let j = 0; j < nums.length; j++){
        if(i !== j && pos === nums[j] && Math.abs(i - j) <= k){
           max = Math.max(max, pos)
        }
    }
}
console.log(max)