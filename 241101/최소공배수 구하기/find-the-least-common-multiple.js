let fs = require('fs');
let read = fs.readFileSync(0).toString().trim().split('\n');
const [num1, num2] = read[0].split(' ').map(Number)
let lcm = 1;
while(true){
    if((lcm % num1 == 0) && (lcm % num2 == 0)){
        break;
      }
      lcm++;
}
console.log(lcm)