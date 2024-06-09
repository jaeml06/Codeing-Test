const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>v.trim())
const [N,M] = input[0].split(' ').map(Number);
const nums = [...new Set(input[1].split(' '))].map(Number).sort((a,b)=>a-b);

const answer = [];

for(let i = 0; i<N; i++){
  solve([nums[i]])
}

console.log(answer.join('\n'))

function solve(arr){
  if(arr.length==M){
    answer.push(arr.join(' '))
  }else{
    for(let i = 0; i<nums.length; i++){
      if(arr[arr.length-1]<=nums[i])
        solve([...arr,nums[i]])
    }
  }
}