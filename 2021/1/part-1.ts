export const file = await Deno.readTextFile("./2021/1/input");
const input = file
  .replace(/\n+$/, "")
  .split("\n")
  .map((d) => parseInt(d));

let total = 0;
input.forEach((depth, index) => {
  if (index !== 0 && depth > input[index - 1]) {
    total++;
  }
});

console.log("2021 Day 1, Part 1: ", total);
