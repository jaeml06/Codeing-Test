let fs = require('fs');
let [temp1, ...temp2] = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = temp1.split(' ').map(Number);
const graph = {};

temp2.map(val => val.split(' ').map(Number)).forEach(([a, b]) => {
    graph[a] = graph[a] || [];
    graph[b] = graph[b] || [];
    graph[a].push(b);
    graph[b].push(a);
});

let visited = Array(N + 1).fill(false);

let vertexCnt = 0

function dfs(vertex) {
    graph[vertex].forEach(currV => {
        if (!visited[currV]) {
            visited[currV] = true;
            vertexCnt++;
            dfs(currV);
        }
    });
};

visited[1] = true
dfs(1);

console.log(vertexCnt);