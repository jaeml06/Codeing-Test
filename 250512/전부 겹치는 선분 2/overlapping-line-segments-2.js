const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
let x1List = [], x2List = [];
for (let i = 1; i <= n; i++) {
    const [x1, x2] = input[i].split(' ').map(Number);
    x1List.push(x1);
    x2List.push(x2);
}

for(let i = 0; i< n; i++){
    const tempX1  = [...x1List]
    const tempX2 = [...x2List]
    tempX1.splice(i, 1);
    tempX2.splice(i,1);

    const maxX1 = Math.max(tempX1);
    const minX2 = Math.min(tempX2);
    if(maxX1 < minX2){
        
    }else{
        console.log('Yes')
        return
    }
}
console.log('No')