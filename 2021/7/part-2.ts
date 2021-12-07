export const file = await Deno.readTextFile("./2021/7/input");
const input = file
  .replace(/\n+$/, "")
  .split(",")
  .map((i) => parseInt(i));

const positions: number[] = [];
for (const pos of input) {
  positions[pos] = positions[pos] ? positions[pos] + 1 : 1;
}
let max = Math.max(...input);
let min = Math.min(...input);

for (let i = 0; i <= max; i++) {
  positions[i] = positions[i] ?? 0;
}

const positionsFuel = positions.map((p) => [0, p]);

let fuel = 0;
while (min !== max) {
  const minCost = positionsFuel[min].reduce((t, v, i) => t + v * i, 0);
  const maxCost = positionsFuel[max].reduce((t, v, i) => t + v * i, 0);
  if (minCost < maxCost) {
    fuel += minCost;
    positionsFuel[min].forEach((p, i) => {
      positionsFuel[min + 1][i + 1] = positionsFuel[min + 1][i + 1]
        ? positionsFuel[min + 1][i + 1] + p
        : p;
    });
    min++;
  } else {
    fuel += maxCost;
    positionsFuel[max].forEach((p, i) => {
      positionsFuel[max - 1][i + 1] = positionsFuel[max - 1][i + 1]
        ? positionsFuel[max - 1][i + 1] + p
        : p;
    });
    max--;
  }
}

console.log("2021 Day 7, Part 2: ", min, max, fuel);
