export const file = await Deno.readTextFile("./2021/2/input");
const input = file
  .replace(/\n+$/, "")
  .split("\n")
  .map((d) => d.split(" "))
  .map((d) => [d[0], parseInt(d[1])]) as [[string, number]];

let depth = 0;
let horiziontal = 0;

input.forEach((row) => {
  if (row[0] === "forward") {
    horiziontal += row[1];
  }
  if (row[0] === "down") {
    depth += row[1];
  }
  if (row[0] === "up") {
    depth -= row[1];
  }
});

console.log("2021 Day 2, Part 1: ", depth * horiziontal);
