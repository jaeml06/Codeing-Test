const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
function com(arr, n){
    const results = [];
    const comb = (start, chosen) => {
        if(chosen.length === n){
            results.push([...chosen])
            return;
        }
        for(let i = start; i < arr.length; i++){
            comb(i + 1, [...chosen, arr[i]])
        }
    }
    comb(0, []);
    return results;
}

const candidates = com(input, 4);

for (const [a, b, c, d] of candidates) {
  const sums = [
    a, b, c, d,
    a + b, a + c, a + d,
    b + c, b + d, c + d,
    a + b + c, a + b + d, a + c + d, b + c + d,
    a + b + c + d
  ];

  const sortedOriginal = [...input].sort((x, y) => x - y).join(',');
  const sortedSums = sums.sort((x, y) => x - y).join(',');

  if (sortedOriginal === sortedSums) {
    
    console.log([a, b, c, d].sort((a, b) => a - b).join(' '));
    break;
  }
}