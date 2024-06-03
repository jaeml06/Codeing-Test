let fs = require('fs');
let read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = read1.shift().split(' ').map(Number);
const arr = read1[0].split(' ').map(Number).sort((a,b) => a - b);
const visited = Array.from({length : N}, () => false)
const answer = new Set();
temp = [];
const dfs = (count) => {
  if(M === count){
    answer.add(temp.join(' '));

  } else {
    for(let i = 0; i< N; i++){
      if(!visited[i]){
        visited[i] = true
        temp.push(arr[i]);
        dfs(count + 1);
        visited[i] = false
        temp.pop(); 
      }
        
    }
  }

}

dfs(0);

console.log(Array.from(answer).join('\n'));