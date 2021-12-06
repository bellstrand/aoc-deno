export const file = await Deno.readTextFile("./2021/6/input");
const input = file
  .replace(/\n+$/, "")
  .split(",")
  .map((i) => parseInt(i));

for (let i = 0; i < 80; i++) {
  for (let j = 0; j < input.length; j++) {
    input[j]--;
    if (input[j] === -1) {
      input[j] = 6;
      input.push(9);
    }
  }
}

console.log("2021 Day 6, Part 1: ", input.length);
