const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

function combin(array){
    let count = 0
    function dfs(start, path){
        if(path.length === 2){
            const sum = path[0] + path[1]
            if(sum === k) count++;
        }
        for(let i = start; i <array.length; i++){
            path.push(array[i]);
            dfs(i+1, path);
            path.pop();
        }
    }
    dfs(0, [])
    return count;
}

const count = combin(arr);

console.log(count)