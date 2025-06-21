const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map(line => {
    const [date, day, weather] = line.split(' ');
    return { date, day, weather };
});

const rainyDays = forecasts
  .filter(({ weather }) => weather === "Rain")
  .sort((a, b) => new Date(a.date) - new Date(b.date));

const closestRainyDay = rainyDays[0];
console.log(`${closestRainyDay.date} ${closestRainyDay.day} ${closestRainyDay.weather}`);