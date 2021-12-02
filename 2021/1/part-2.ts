export const file = await Deno.readTextFile("./2021/1/input");
const input = file
  .replace(/\n+$/, "")
  .split("\n")
  .map((d) => parseInt(d));

let total = 0;
input.forEach((depth, index) => {
  const currentDepth = depth + input[index - 1] + input[index - 2];
  const previousDepth = input[index - 1] + input[index - 2] + input[index - 3];
  if (index > 1 && currentDepth > previousDepth) {
    total++;
  }
});

console.log("2021 Day 1, Part 2: ", total);
