const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const temp = Array.from({length : n}, (_, index) => index+1)

function combin(arr, count){
    const result = [];

    function dfs(start, path){
        if(path.length === count){
            result.push([...path]);
            return;
        }
        for(let i = start; i< arr.length; i++){
            path.push(arr[i]);
            dfs(i+1, path);
            path.pop()
        }
    }
    dfs(0, [])
    return result
}

const arr = combin(temp, m);
arr.forEach(val => {
    console.log(val.join(' '))
})