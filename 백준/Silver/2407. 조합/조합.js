let fs = require('fs');
let read = fs.readFileSync(0).toString().trim().split('\n');
const str = read[0].split(' ').map(Number)

function combin(n, m) {
  let result = BigInt(1);

  // 최적화: mCn = nCm 이므로 m이 더 클 때 m을 n - m으로 대체
  if (m > n - m) {
    m = n - m;
  }

  // BigInt를 사용한 조합 계산
  for (let i = 0; i < m; i++) {
    result *= BigInt(n - i);    // BigInt로 변환하여 곱셈
    result /= BigInt(i + 1);    // BigInt로 변환하여 나눗셈
  }

  return result;
}


console.log(combin(str[0], str[1]).toString());