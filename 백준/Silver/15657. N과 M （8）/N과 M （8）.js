let fs = require('fs');
const read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = read1[0].split(' ').map(Number);
const arr = read1[1].split(' ').map(Number).sort((a,b) => a-b);

const answer = [];
const temp = []
const DFS =(count) => {
  if(count === M){
    answer.push(temp.join(' '));
  }else {
    for(let i = 0; i < N; i++){
      if(temp[temp.length -1] > arr[i]) continue;
      temp.push(arr[i]);
      DFS(count + 1);
      temp.pop()
    }
  }
}
DFS(0, arr[0]);

console.log(answer.join('\n'));