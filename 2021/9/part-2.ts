export const file = await Deno.readTextFile("./2021/9/input");
const input = file
  .replace(/\n+$/, "")
  .split("\n")
  .map((line) => line.split("").map((n) => parseInt(n)));

function basin(i: number, j: number): [number, number] {
  for (const [di, dj] of [
    [i - 1, j],
    [i + 1, j],
    [i, j - 1],
    [i, j + 1],
  ]) {
    if (input[di]?.[dj] !== undefined && input[i][j] > input[di][dj]) {
      return basin(di, dj);
    }
  }
  return [i, j];
}

let basins = [];
for (const [i, line] of input.entries()) {
  for (const [j, char] of line.entries()) {
    if (char !== 9) {
      basins.push(basin(i, j));
    }
  }
}

let common: Record<string, number> = {};
for (const basin of basins) {
  const key = JSON.stringify(basin);
  common[key] = common[key] + 1 || 1;
}

let result = 1;
Object.entries(common)
  .sort((a, b) => b[1] - a[1])
  .splice(0, 3)
  .forEach(([key, value]) => {
    result *= value;
  });

console.log("2021 Day 9, Part 2: ", result);
