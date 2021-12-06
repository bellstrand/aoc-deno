export const file = await Deno.readTextFile("./2021/6/input");
const input = file
  .replace(/\n+$/, "")
  .split(",")
  .map((i) => parseInt(i));

const timer = Array(9).fill(0);
for (const time of input) {
  timer[+time]++;
}
for (let day = 0; day < 256; day++) {
  const x = timer.shift();
  timer[6] += x;
  timer[8] = x;
}
const result = timer.reduce((a, b) => a + b);

console.log("2021 Day 6, Part 2: ", result);
