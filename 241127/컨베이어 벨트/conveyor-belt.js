let fs = require('fs');
let [temp1, ...temp2] = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = temp1.split(' ').map(Number);
const container1 = temp2.splice(0, 1)[0].split(' ', n).map(Number)
const container2 = temp2.splice(0, 1)[0].split(' ', n).map(Number)

for(let i = 0; i < t; i++){
    const box1 = container1.pop()
    const box2 = container2.pop()

    container1.unshift(box2)
    container2.unshift(box1)
}
console.log(container1.join(' '))
console.log(container2.join(' '))