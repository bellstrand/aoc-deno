export const file = await Deno.readTextFile("./2021/3/input");
const input = file.replace(/\n+$/, "").split("\n");

const arr: Array<Record<string, number>> = [];
input.forEach((num) => {
  num.split("").forEach((n, i) => {
    if (!arr[i]) {
      arr[i] = { 0: 0, 1: 0 };
    }
    arr[i][n]++;
  });
});

let gamma = "";
let epsilon = "";
arr.forEach((n) => {
  gamma += n[0] > n[1] ? "0" : "1";
  epsilon += n[0] > n[1] ? "1" : "0";
});

console.log(
  "2021 Day 3, Part 1: ",
  parseInt(gamma, 2),
  parseInt(epsilon, 2),
  parseInt(gamma, 2) * parseInt(epsilon, 2)
);
