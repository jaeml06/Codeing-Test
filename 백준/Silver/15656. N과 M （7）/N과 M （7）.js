let fs = require('fs');
const read1 = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N , M] = read1[0].split(' ').map(Number);

const arr = read1[1].split(' ').map(Number).sort((a, b) => a- b);
let temp = []
let answer = ''


const DFS = (count) => {
  if(count === M) {
    answer += temp.join(' ') + '\n';
  } else {
    for(let i = 0; i< N; i++){

        temp.push(arr[i])
        DFS(count+1);
        temp.pop()
      }
    }
  }


DFS(0);

console.log(answer);