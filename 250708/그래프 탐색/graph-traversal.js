const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const edges = [];
for (let i = 1; i <= m; i++) {
    edges.push(input[i].split(' ').map(Number));
}

const graph = Array.from({length: n + 1}, () => []);
for(const [a, b] of edges){
    graph[a].push(b);
    graph[b].push(a);
}

const visited = Array(n + 1).fill(false);

function dfs(node){
    visited[node] = true
    for(const next of graph[node]){
        if(!visited[next]){
            dfs(next);
        }
    }
}
dfs(1)

console.log(visited.reduce((prev, cur) => prev + (cur ? 1 : 0), 0) - 1)