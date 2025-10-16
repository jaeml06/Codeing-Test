const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let ans = '';
if (input.includes('ee')) {
    ans += 'Yes ';
}
else {
    ans += 'No ';
}

if (input.includes('ab')) {
    ans += 'Yes';
} else {
    ans += 'No';
}

console.log(ans);