export const file = await Deno.readTextFile("./2021/9/input");
const input = file
  .replace(/\n+$/, "")
  .split("\n")
  .map((line) => line.split("").map((n) => parseInt(n)));

function risk(i: number, j: number): number {
  const char = input[i][j];
  const top = input[i - 1]?.[j] ?? 10;
  const bottom = input[i + 1]?.[j] ?? 10;
  const left = input[i]?.[j - 1] ?? 10;
  const right = input[i]?.[j + 1] ?? 10;
  if (top > char && bottom > char && left > char && right > char) {
    return char + 1;
  }
  return 0;
}

let result = 0;
for (const [i, line] of input.entries()) {
  for (const [j] of line.entries()) {
    result += risk(i, j);
  }
}

console.log("2021 Day 9, Part 1: ", result);
