let fs = require('fs');
let read1 = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(read1[0])
for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}
