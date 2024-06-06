let fs = require('fs');
let read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = read1[0].split(' ').map(Number);
const arr = read1[1].split(' ').map(Number).sort((a,b) => a- b);
const visited = Array.from({length : N}, () => false);
const answer = new Set();;
const temp = [];
const dfs = (count) => {
  if(count === M){
    const temp2 = [...temp]
    answer.add(temp2.join(' '))
  }else{
    for(let i = 0; i < N;i++){

        visited[i] = true;
        temp.push(arr[i]);
        dfs(count + 1);
        temp.pop();
        visited[i] = false;
  
    }
  }
}
dfs(0);
console.log(Array.from(answer).join('\n'));