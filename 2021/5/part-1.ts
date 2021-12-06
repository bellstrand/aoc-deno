export const file = await Deno.readTextFile("./2021/5/input");
type Line = { x1: number; y1: number; x2: number; y2: number };
const input: Line[] = file
  .replace(/\n+$/, "")
  .split("\n")
  .map((l) => l.trim().split(/\s+/))
  .map((line) => {
    const start = line[0].split(",").map((num) => parseInt(num));
    const end = line[2].split(",").map((num) => parseInt(num));
    return { x1: start[0], y1: start[1], x2: end[0], y2: end[1] };
  })
  .filter((line) => line.x1 === line.x2 || line.y1 === line.y2);

const vents: Map<string, number> = new Map();

for (const line of input) {
  let x = line.x1;
  let y = line.y1;
  const xStep = line.x1 < line.x2 ? 1 : line.x1 === line.x2 ? 0 : -1;
  const yStep = line.y1 < line.y2 ? 1 : line.y1 === line.y2 ? 0 : -1;

  while (x !== line.x2 + xStep || y !== line.y2 + yStep) {
    const coord = `${x},${y}`;
    vents.set(coord, (vents.get(coord) ?? 0) + 1);
    x += xStep;
    y += yStep;
  }
}

const result = [...vents.values()].filter((val) => val > 1).length;

console.log("2021 Day 6, Part 1: ", result);
