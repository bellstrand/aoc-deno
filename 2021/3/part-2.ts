export const file = await Deno.readTextFile("./2021/3/input");
const input = file.replace(/\n+$/, "").split("\n");

let oxygen = input;
for (let i = 0; i < input[0].length; i++) {
  let r: Record<string, number> = { 0: 0, 1: 0 };
  oxygen.forEach((num) => r[num[i]]++);
  oxygen = oxygen.filter((o) => o[i] === (r[0] > r[1] ? "0" : "1"));
  if (oxygen.length === 1) break;
}

let co2 = input;
for (let i = 0; i < input[0].length; i++) {
  let r: Record<string, number> = { 0: 0, 1: 0 };
  co2.forEach((num) => r[num[i]]++);
  co2 = co2.filter((o) => o[i] === (r[0] <= r[1] ? "0" : "1"));
  if (co2.length === 1) break;
}

console.log(
  "2021 Day 3, Part 2: ",
  parseInt(oxygen[0], 2),
  parseInt(co2[0], 2),
  parseInt(oxygen[0], 2) * parseInt(co2[0], 2)
);
