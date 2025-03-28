const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const abilities = input[0].split(" ").map(Number);
const n = abilities.length;

let minDiff = Number.MAX_SAFE_INTEGER;
let found = false;

// 0~4 중에서 2명 고르기 (팀 1)
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    // 0~4 중에서 또 다른 2명 고르기 (팀 2)
    for (let k = 0; k < n; k++) {
      for (let l = k + 1; l < n; l++) {
        const used = new Set([i, j, k, l]);
        if (used.size !== 4) continue;

        const remaining = [0, 1, 2, 3, 4].filter((x) => !used.has(x));
        const [m] = remaining;

        const team1 = abilities[i] + abilities[j];
        const team2 = abilities[k] + abilities[l];
        const team3 = abilities[m];

        const set = new Set([team1, team2, team3]);
        if (set.size === 3) {
          found = true;
          const max = Math.max(team1, team2, team3);
          const min = Math.min(team1, team2, team3);
          minDiff = Math.min(minDiff, max - min);
        }
      }
    }
  }
}

console.log(found ? minDiff : -1);