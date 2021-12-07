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

let fuel = 0;
while (min !== max) {
  if (positions[min] < positions[max]) {
    fuel += positions[min];
    positions[min + 1] = positions[min] + positions[min + 1];
    min++;
  } else {
    fuel += positions[max];
    positions[max - 1] = positions[max] + positions[max - 1];
    max--;
  }
}

console.log("2021 Day 7, Part 1: ", min, max, fuel);
