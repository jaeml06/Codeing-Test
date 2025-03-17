const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]); // 첫 번째 줄에서 N을 가져옴
const arr = input.slice(1, N + 1).map(Number); // 숫자로 변환된 배열

let answer = -1;

for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
        for (let k = j + 1; k < N; k++) {
            let a = arr[i];
            let b = arr[j];
            let c = arr[k];

            let isValid = true;
            let sum = a + b + c; 

            while (a > 0 || b > 0 || c > 0) {
                let digitSum = (a % 10) + (b % 10) + (c % 10);
                if (digitSum >= 10) {
                    isValid = false;
                    break;
                }
                a = Math.floor(a / 10);
                b = Math.floor(b / 10);
                c = Math.floor(c / 10);
            }

            if (isValid) {
                answer = Math.max(answer, sum);
            }
        }
    }
}

console.log(answer);