export const file = await Deno.readTextFile("./2021/8/input");
const input = file.replace(/\n+$/, "").split("\n");

let result = 0;
for (const line of input) {
  const digits = line.split("|")[1].trim().split(" ");
  result += digits.filter((d) => d.length !== 5 && d.length !== 6).length;
}

console.log("2021 Day 8, Part 1: ", result);
