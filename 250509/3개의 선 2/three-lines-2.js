const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

function getCombinations(arr, selectConut) {
    const result = [];

    function dfs(start, path){
        if(path.length === selectConut){
            result.push([...path]);
        }
        for(let i = start; i < arr.length; i++){
            path.push(arr[i]);
            dfs(i + 1, path);
            path.pop();
        }
    }

    dfs(0, []);
    return result
}

const xyLine = [];
for(let i = 0; i <= 10; i++){
    xyLine.push(['x', i])
}
for(let i = 0; i <= 10; i++){
    xyLine.push(['y', i])
}

const arr = getCombinations(xyLine, 3);

const answer = arr.some((val) => {
    const visited = Array(points.length).fill(false)
    val.forEach((target) => {
        const [line, pos] = target;
        if(line === 'x'){
            points.forEach(([x, y], index) => {
                if(pos === x){
                    visited[index] = true
                }
            })
        }
        if(line === 'y'){
            points.forEach(([x, y], index) => {
                if(pos === y){
                    visited[index] = true
                }
            })
        }

    })
    if(visited.every((k) => k)){
        return true
    }
    return false;
})
console.log(answer ? 1 : 0)